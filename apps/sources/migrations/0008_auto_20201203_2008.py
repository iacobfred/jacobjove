# Generated by Django 3.1.4 on 2020-12-03 20:08

from django.db import migrations, models

import modularhistory.fields
import modularhistory.fields.html_field


class Migration(migrations.Migration):

    dependencies = [
        ('sources', '0007_auto_20201201_1954'),
    ]

    operations = [
        migrations.AlterField(
            model_name='publication',
            name='aliases',
            field=models.CharField(blank=True, max_length=100, null=True, verbose_name='aliases'),
        ),
        migrations.AlterField(
            model_name='publication',
            name='description',
            field=modularhistory.fields.HTMLField(blank=True, null=True, paragraphed=True, processor=modularhistory.fields.html_field.process, verbose_name='description'),
        ),
        migrations.AlterField(
            model_name='publication',
            name='name',
            field=models.CharField(blank=True, max_length=100, null=True, unique=True, verbose_name='name'),
        ),
    ]
