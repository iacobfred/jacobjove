import re
from sys import stderr
from typing import Callable, Optional, Union, TYPE_CHECKING

from django.core.exceptions import ObjectDoesNotExist
from django.template.loader import render_to_string
from django.urls import reverse
from django.utils.safestring import SafeText
from tinymce.models import HTMLField as MceHTMLField

from history.structures.html import HTML

if TYPE_CHECKING:
    from quotes.models import Quote

# group 1: image pk
# group 2: ignore
# group 3: image caption
image_key_regex = r'{{\ ?image:\ ?(.+?)(:([^}]+?))?\ ?}}'

# group 1: quote pk
# group 2: ignore
# group 3: quote content
# group 4: closing brackets
quote_key_regex = r'{{\ ?quote:\ ?([\w\d]+?)(:([^}]+?))?(\ ?}})'

# group 1: citation pk (e.g., '988')
# group 2: ignore
# group 3: page string (e.g., 'p. 22')
# group 4: ignore
# group 5: quotation (e.g., "It followed institutionalized procedures....")
citation_key_regex = r'\ ?{{\ ?citation:\ ?([\d\w]+)(,\ (pp?\.\ [\d]+))?(,\ (\".+?\"))?\ ?}}'

# group 1: source pk
source_key_regex = r'{{\ ?source:\ ?(.+?)\ ?}}'

# group 1: entity pk
# group 2: entity name
entity_name_regex = r'<span class=\"entity-name\" data-entity-id=\"(\d+)\">(.+?)</span>'


def process(_, html: str) -> str:
    if '{{' in html:
        from images.models import Image
        from quotes.models import Quote
        from sources.models import Source, Citation

        # Process images
        for match in re.finditer(image_key_regex, html):
            key = match.group(1).strip()
            try:
                image = Image.objects.get(pk=key)
            except Exception as e:
                print(f'{e}', file=stderr)
                image = Image.objects.get(key=key)
            image_html = render_to_string(
                'images/_card.html',
                context={'image': image, 'object': image}
            )
            if image.width < 300:
                image_html = f'<div class="float-right pull-right">{image_html}</div>'
            if image.width < 500:
                image_html = f'<div style="text-align: center">{image_html}</div>'
            html = html.replace(match.group(0), image_html)

        # Process quotes
        for match in re.finditer(quote_key_regex, html):
            key = match.group(1).strip()
            quote = Quote.objects.get(pk=key)
            quote_html = get_quote_html(quote)
            html = html.replace(match.group(0), quote_html)

        # Process citations
        for match in re.finditer(citation_key_regex, html):
            key = match.group(1).strip()
            print(f'Found match: {match.group(0)}')
            try:
                citation = Citation.objects.get(pk=key)
            except ObjectDoesNotExist:
                print(f'Unable to retrieve citation: {key}', file=stderr)
                continue
            html_id = citation.html_id
            source_string = str(citation)
            page_str = match.group(3)
            quotation = match.group(5)
            if page_str:
                page_str = page_str.strip()
                page_str_regex = re.compile(Citation.PAGE_STRING_REGEX)
                page_str_match = page_str_regex.match(source_string)
                if page_str_match:
                    _page_string = page_str_match.group(1)
                    source_string = source_string.replace(_page_string, page_str)
                else:
                    source_string += f', {page_str}'
            if quotation:
                source_string += f': {quotation}'
            source_string = source_string.replace('"', '\\"').replace("'", "\\'")
            citation_html = (f'<a href="#{html_id}" title="{source_string}">'
                             f'<sup>{citation.number}</sup>'
                             f'</a>')
            html = html.replace(match.group(0), citation_html)

        # Process sources
        for match in re.finditer(source_key_regex, html):
            key = match.group(1).strip()
            source = Source.objects.get(pk=key)
            source_html = f'{source.html}'
            html = html.replace(match.group(0), source_html)

    if re.search(entity_name_regex, html):
        # from entities.models import Entity
        processed_entity_keys = []
        for match in re.finditer(entity_name_regex, html):
            key = match.group(1).strip()
            entity_name = match.group(2)
            # Process the entity name if it hasn't already been processed
            if key not in processed_entity_keys:
                processed_entity_keys.append(key)
                try:
                    # entity = Entity.objects.get(pk=key)
                    entity_link = (f'<a href="{reverse("entities:detail", args=[key])}" '
                                   f'target="_blank">{entity_name}</a>')
                    html = html.replace(match.group(0), entity_link, 1)
                except Exception as e:
                    print(f'{e}', file=stderr)
    return html


class HTMLField(MceHTMLField):
    """A string field for HTML content; uses the TinyMCE widget in forms."""
    raw_value: str
    html: SafeText
    text: str
    DEFAULT_PROCESSOR: Callable = process
    processor: Optional[Callable] = DEFAULT_PROCESSOR

    def __init__(self, *args, **kwargs):
        if 'processor' in kwargs and kwargs['processor'] != self.DEFAULT_PROCESSOR:
            self.processor = kwargs['processor']
        super().__init__(*args, **kwargs)

    def clean(self, value, model_instance) -> HTML:
        html = super().clean(value=value, model_instance=model_instance)

        # Add Bootstrap classes to blockquotes and tables
        raw_html = html.raw_value.replace(
            '<blockquote>', '<blockquote class="blockquote">'
        ).replace(
            '<table>', '<table class="table">'
        ).strip()

        # Remove empty divs
        raw_html = re.sub(r'\n?<div[^>]+?>&nbsp;<\/div>', '', raw_html)
        raw_html = re.sub(r'<div id=\"i4c-draggable-container\"[^\/]+</div>', '', raw_html)
        raw_html = re.sub(r'<p>&nbsp;<\/p>', '', raw_html)

        # Insert links for entity names
        if model_instance.pk and (hasattr(model_instance, 'attributees')
                                  or hasattr(model_instance, 'involved_entities')):
            entities = (getattr(model_instance, 'attributees', None)
                        or getattr(model_instance, 'involved_entities', None))
            if entities and entities.exists():
                entities = entities.all()
                from entities.models import Entity
                for e in entities:
                    entity: Entity = e
                    for name in set([entity.name] + entity.aliases):
                        print(f'>>> {name}', file=stderr)
                        raw_html = re.sub(
                            rf'(^|[^>])({name})([^\w])',
                            rf'\g<1><span class="entity-name" data-entity-id="{entity.pk}">\g<2></span>\g<3>',
                            raw_html
                        )

        # Add quote content (purely for readability when editing)
        quote_cls = None
        for match in re.finditer(quote_key_regex, raw_html):
            quote_placeholder = match.group(0)
            if not quote_cls:
                from quotes.models import Quote
                quote_cls = Quote
            key = match.group(1).strip()
            quote = quote_cls.objects.get(pk=key)
            quote_html = get_quote_html(quote)
            appendage = match.group(2)
            updated_appendage = f': {quote_html}'
            if not appendage:
                updated_quote_placeholder = (
                    f'{quote_placeholder.replace(" }}", "").replace("}}", "")}'
                    f'{updated_appendage}'
                ) + '}}'  # Angle brackets can't be included in f-string literals
            else:
                updated_quote_placeholder = quote_placeholder.replace(appendage, updated_appendage)
            raw_html = raw_html.replace(quote_placeholder, updated_quote_placeholder)

        # Add image captions (purely for readability when editing)
        image_cls = None
        for match in re.finditer(image_key_regex, raw_html):
            image_placeholder = match.group(0)
            if not image_cls:
                from images.models import Image
                image_cls = Image
            key = match.group(1).strip()
            image = image_cls.objects.get(pk=key)
            appendage = match.group(2)
            updated_appendage = f': {image.caption.html}'
            if not appendage:
                updated_image_placeholder = (
                    f'{image_placeholder.replace(" }}", "").replace("}}", "")}'
                    f'{updated_appendage}'
                ) + '}}'  # Angle brackets can't be included in f-string literals
            else:
                updated_image_placeholder = image_placeholder.replace(appendage, updated_appendage)
            raw_html = raw_html.replace(image_placeholder, updated_image_placeholder)

        # Wrap HTML content in a <p> tag if necessary
        if not raw_html.startswith('<') and raw_html.endswith('>'):
            raw_html = f'<p>{raw_html}</p>'

        html.raw_value = raw_html
        return html

    def deconstruct(self):
        field_class = 'history.fields.HTMLField'
        name, path, args, kwargs = super().deconstruct()
        if self.processor != self.DEFAULT_PROCESSOR:
            kwargs['processor'] = self.processor
        return name, field_class, args, kwargs

    # https://docs.djangoproject.com/en/3.0/howto/custom-model-fields/#converting-values-to-python-objects
    def from_db_value(self, value: Optional[str], expression, connection) -> Optional[HTML]:
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
                html = self.processor(html)
            except RecursionError as e:
                print(f'Unable to process HTML; encountered exception: {e}', file=stderr)
        return HTML(value, processed_value=html)

    # https://docs.djangoproject.com/en/3.0/howto/custom-model-fields/#converting-values-to-python-objects
    def to_python(self, value: Optional[Union[HTML, str]]) -> Optional[HTML]:
        if isinstance(value, HTML):
            return value
        elif not value:
            return None
        return HTML(value)

    # https://docs.djangoproject.com/en/3.0/howto/custom-model-fields/#converting-python-objects-to-query-values
    def get_prep_value(self, value: Optional[HTML]) -> Optional[str]:
        if isinstance(value, HTML):
            return value.raw_value
        elif not value:
            return None

    # https://docs.djangoproject.com/en/3.0/howto/custom-model-fields/#converting-query-values-to-database-values
    def get_db_prep_value(self, value, connection, prepared=False):
        return self.get_prep_value(value)

    # https://docs.djangoproject.com/en/3.0/howto/custom-model-fields/#id2
    def value_to_string(self, obj) -> str:
        value = self.value_from_object(obj)
        return self.get_prep_value(value) or ''


def get_quote_html(quote: 'Quote'):
    return (
        f'<blockquote class="blockquote">'
        f'{quote.text.html}'
        f'<footer class="blockquote-footer" style="position: relative;">'
        f'{quote.citation_html or quote.attributee_string}'
        f'</footer>'
        f'</blockquote>'
    )
