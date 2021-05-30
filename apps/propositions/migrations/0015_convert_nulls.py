# Generated by Django 3.1.11 on 2021-05-28 22:23

import autoslug.fields
from django.db import migrations

import core.fields
import core.fields.html_field


def convert_nulls(apps, schema_editor):
    app = 'propositions'
    models = ('Citation', 'PolymorphicProposition')
    fields = (
        'citation_html',
        'citation_phrase',
        'elaboration',
        'postscript',
        'slug',
        'title',
    )
    for model in models:
        Model = apps.get_model(app, model)
        for field in fields:
            if hasattr(Model, field):
                filter_param = {f'{field}__isnull': True}
                update_param = {field: ''}
                Model.objects.filter(**filter_param).update(**update_param)


class Migration(migrations.Migration):

    dependencies = [
        ('propositions', '0014_auto_20210527_1903'),
    ]

    operations = [
        migrations.RunPython(convert_nulls, migrations.RunPython.noop),
    ]
