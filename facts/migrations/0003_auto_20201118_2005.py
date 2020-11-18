# Generated by Django 3.1.3 on 2020-11-18 20:05

from django.db import migrations

import modularhistory.fields
import modularhistory.fields.html_field


class Migration(migrations.Migration):

    dependencies = [
        ('facts', '0002_auto_20201117_2008'),
    ]

    operations = [
        migrations.AlterField(
            model_name='fact',
            name='elaboration',
            field=modularhistory.fields.HTMLField(blank=True, null=True, paragraphed=True, processor=modularhistory.fields.html_field.process),
        ),
        migrations.AlterField(
            model_name='fact',
            name='summary',
            field=modularhistory.fields.HTMLField(paragraphed=False, processor=modularhistory.fields.html_field.process, unique=True),
        ),
    ]
