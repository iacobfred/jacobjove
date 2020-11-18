# Generated by Django 3.1.3 on 2020-11-18 20:05

from django.db import migrations

import modularhistory.fields
import modularhistory.fields.html_field


class Migration(migrations.Migration):

    dependencies = [
        ('topics', '0004_auto_20201111_2245'),
    ]

    operations = [
        migrations.AlterField(
            model_name='topic',
            name='description',
            field=modularhistory.fields.HTMLField(blank=True, null=True, paragraphed=True, processor=modularhistory.fields.html_field.process),
        ),
    ]
