# Generated by Django 3.1.3 on 2020-11-18 20:05

from django.db import migrations

import modularhistory.fields
import modularhistory.fields.html_field


class Migration(migrations.Migration):

    dependencies = [
        ('occurrences', '0006_auto_20201117_2100'),
    ]

    operations = [
        migrations.AlterField(
            model_name='occurrence',
            name='description',
            field=modularhistory.fields.HTMLField(blank=True, null=True, paragraphed=True, processor=modularhistory.fields.html_field.process, verbose_name='Description'),
        ),
        migrations.AlterField(
            model_name='occurrence',
            name='postscript',
            field=modularhistory.fields.HTMLField(blank=True, help_text='Content to be displayed below all related data', null=True, paragraphed=True, processor=modularhistory.fields.html_field.process, verbose_name='Postscript'),
        ),
        migrations.AlterField(
            model_name='occurrence',
            name='summary',
            field=modularhistory.fields.HTMLField(blank=True, null=True, paragraphed=False, processor=modularhistory.fields.html_field.process, verbose_name='Summary'),
        ),
        migrations.AlterField(
            model_name='occurrencechain',
            name='description',
            field=modularhistory.fields.HTMLField(null=True, paragraphed=True, processor=modularhistory.fields.html_field.process, unique=True),
        ),
    ]
