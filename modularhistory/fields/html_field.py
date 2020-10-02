import re
from sys import stderr
from typing import Callable, Iterable, Optional, TYPE_CHECKING, Type, Union

from django.contrib.contenttypes.models import ContentType
from django.utils.html import SafeString
from django.utils.module_loading import import_string
from tinymce.models import HTMLField as MceHTMLField
# from django.forms import ValidationError
from django.core.exceptions import ValidationError

if TYPE_CHECKING:
    from entities.models import Entity



from modularhistory.constants import MODEL_CLASS_PATHS
from modularhistory.structures.html import HTML

if TYPE_CHECKING:
    from modularhistory.models import Model

# group 1: entity pk
# group 2: entity name
ENTITY_NAME_REGEX = r'<span class=\"entity-name\" data-entity-id=\"(\d+)\">(.+?)</span>'

# group 1: obj type
OBJECT_REGEX = re.compile(r'{{ ?(\w+):(?!}})[\s\S]+? ?}}')


def process(_, html: str, processable_content_types: Iterable[str]) -> str:
    """TODO: add docstring."""
    for match in OBJECT_REGEX.finditer(html):
        placeholder = match.group(0)
        object_type = match.group(1)
        model_cls_str = MODEL_CLASS_PATHS.get(object_type)
        if model_cls_str:
            model_cls: Type[Model] = import_string(model_cls_str)
            # TODO
            object_match = model_cls.admin_placeholder_regex.match(placeholder)
            object_html = model_cls.get_object_html(object_match, use_preretrieved_html=True)
            html = html.replace(placeholder, object_html)
        else:
            print(f'Unable to retrieve model class string for `{object_type}`', file=stderr)
    return html


class HTMLField(MceHTMLField):
    """A string field for HTML content; uses the TinyMCE widget in forms."""

    raw_value: str
    html: SafeString
    text: str
    default_processor: Callable = process
    processor: Optional[Callable] = default_processor

    # Types of processable objects included in HTML
    processable_content_types: Iterable[str] = ['quote', 'image', 'citation']

    def __init__(self, *args, **kwargs):
        """TODO: add docstring."""
        if 'processor' in kwargs and kwargs['processor'] != self.default_processor:
            self.processor = kwargs['processor']
        super().__init__(*args, **kwargs)

    def clean(self, value, model_instance) -> HTML:
        """TODO: add docstring."""
        html = super().clean(value=value, model_instance=model_instance)

        raw_html = html.raw_value
        replacements = (
            (r'<blockquote>', '<blockquote class="blockquote">'),
            (r'<table>', '<table class="table">'),
            # Remove empty divs
            (r'\n?<div[^>]+?>&nbsp;<\/div>', ''),
            (r'<div id=\"i4c-draggable-container\"[^\/]+</div>', ''),
            (r'<p>&nbsp;<\/p>', '')
        )
        for pattern, replacement in replacements:
            try:
                raw_html = re.sub(pattern, replacement, raw_html).strip()
            except Exception as e:
                raise Exception(
                    f'Failed to replace `{pattern}` ({type(pattern)}) with `{replacement}` ({type(replacement)} '
                    f'in {raw_html}\n({type(raw_html)})\n{e}'
                )

        # Insert links for entity names.
        has_entity_relations = hasattr(model_instance, 'attributees') or hasattr(model_instance, 'involved_entities')
        if model_instance.pk and has_entity_relations:
            entities = (
                getattr(model_instance, 'attributees', None) or
                getattr(model_instance, 'involved_entities', None)
            )
            if entities and entities.exists():
                entities = entities.all()
                for entity in entities:
                    ent: 'Entity' = entity
                    aliases = ent.aliases or []
                    for name in set([ent.name] + aliases):
                        opening_span_tag = f'<span class="entity-name" data-entity-id="{ent.pk}">'
                        closing_span_tag = '</span>'
                        raw_html = re.sub(
                            # match instances not in quotations
                            rf'(^|^<p>|[^>])({name})(?:(?!\w|[^\ ]\"))',
                            rf'\g<1>{opening_span_tag}\g<2>{closing_span_tag}',
                            raw_html
                        )

        # Update obj placeholders.
        # This (1) improves readability when editing and (2) reduces time to process search results.
        for content_type in self.processable_content_types:
            model_cls_str = MODEL_CLASS_PATHS.get(content_type)
            if model_cls_str:
                try:
                    model_cls = import_string(model_cls_str)
                    for match in model_cls.admin_placeholder_regex.finditer(raw_html):
                        placeholder = match.group(0)
                        updated_placeholder = model_cls.get_updated_placeholder(match)
                        raw_html = raw_html.replace(placeholder, updated_placeholder)
                except Exception as e:
                    raise ValidationError(f'{e}')

        # Wrap HTML content in a <p> tag if necessary
        if not raw_html.startswith('<') and raw_html.endswith('>'):
            raw_html = f'<p>{raw_html}</p>'

        html.raw_value = raw_html
        return html

    def deconstruct(self):
        """TODO: add docstring."""
        field_class = 'modularhistory.fields.HTMLField'
        name, path, args, kwargs = super().deconstruct()
        if self.processor != self.default_processor:
            kwargs['processor'] = self.processor
        return name, field_class, args, kwargs

    # https://docs.djangoproject.com/en/3.0/howto/custom-model-fields/#converting-values-to-python-objects
    def from_db_value(self, value: Optional[str], expression, connection) -> Optional[HTML]:
        """TODO: add docstring."""
        if value is None:
            return value
        if not value.startswith('<') and value.endswith('>'):
            value = f'<p>{value}</p>'
        # Remove empty divs
        value = re.sub(r'\n?<div[^>]+?>&nbsp;<\/div>', '', value)
        value = re.sub(r'<div id=\"i4c-draggable-container\"[^\/]+</div>', '', value)
        value = re.sub(r'<p>&nbsp;<\/p>', '', value)
        html = value
        if self.processor:
            try:
                html = self.processor(html, self.processable_content_types)
            except RecursionError as e:
                print(f'Unable to process HTML; encountered recursion error: {e}', file=stderr)
            except Exception as e:
                print(f'Unable to process HTML; encountered error: {e}\n\n{html}', file=stderr)
        return HTML(value, processed_value=html)

    # https://docs.djangoproject.com/en/3.0/howto/custom-model-fields/#converting-values-to-python-objects
    def to_python(self, value: Optional[Union[HTML, str]]) -> Optional[HTML]:
        """TODO: add docstring."""
        if isinstance(value, HTML):
            return value
        elif not value:
            return None
        return HTML(value)

    # https://docs.djangoproject.com/en/3.0/howto/custom-model-fields/#converting-python-objects-to-query-values
    def get_prep_value(self, value: Optional[Union[HTML, str]]) -> Optional[str]:
        """TODO: add docstring."""
        if not value:
            return None
        elif isinstance(value, HTML):
            return value.raw_value
        return value

    # https://docs.djangoproject.com/en/3.0/howto/custom-model-fields/#converting-query-values-to-database-values
    def get_db_prep_value(self, value, connection, prepared=False):
        """TODO: add docstring."""
        return self.get_prep_value(value)

    # https://docs.djangoproject.com/en/3.0/howto/custom-model-fields/#id2
    def value_to_string(self, obj) -> str:
        """TODO: add docstring."""
        value = self.value_from_object(obj)
        return self.get_prep_value(value) or ''


def _get_model_class(ct: ContentType) -> Type['Model']:
    model_class = ct.model_class()
    if model_class is None:
        raise ValueError(f'Could not retrieve model class for {ct}.')
    from modularhistory.models import Model
    if not issubclass(model_class, Model):
        raise ValueError(f'{model_class} is not subclassed from custom model class.')
    return model_class


# def get_image_html(image: Union['Image', Match]):
#     """TODO: add docstring."""
#     if hasattr(image, 'group'):
#         match = image
#         key = match.group(1).strip()
#         from images.models import Image
#         try:
#             image = Image.objects.get(pk=key)
#         except ValueError as e:  # legacy key
#             print(f'{e}')
#             image = Image.objects.get(key=key)
#     image_html = render_to_string(
#         'images/_card.html',
#         context={'image': image, 'obj': image}
#     )
#     if image.width < FLOAT_UPPER_WIDTH_LIMIT:
#         image_html = f'<div class="float-right pull-right">{image_html}</div>'
#     if image.width < CENTER_UPPER_WIDTH_LIMIT:
#         image_html = f'<div style="text-align: center">{image_html}</div>'
#     return image_html
