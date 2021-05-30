# Generated by Django 3.1.11 on 2021-05-25 03:14

import django.db.models.deletion
from django.db import migrations, models

import apps.places.models.model_with_locations
import core.fields.m2m_foreign_key
import core.fields.sorted_m2m_field


class Migration(migrations.Migration):

    dependencies = [
        ('places', '0003_auto_20210519_1729'),
        ('propositions', '0011_auto_20210524_0113'),
    ]

    operations = [
        migrations.AlterField(
            model_name='polymorphicproposition',
            name='locations',
            field=core.fields.sorted_m2m_field.SortedManyToManyField(
                blank=True,
                help_text=None,
                related_name='_polymorphicproposition_set',
                sort_value_field_name='position',
                to='places.Place',
                verbose_name='locations',
            ),
        ),
        migrations.CreateModel(
            name='Location',
            fields=[
                (
                    'id',
                    models.AutoField(
                        auto_created=True,
                        primary_key=True,
                        serialize=False,
                        verbose_name='ID',
                    ),
                ),
                (
                    'position',
                    models.PositiveSmallIntegerField(blank=True, default=0, null=True),
                ),
                (
                    'content_object',
                    core.fields.m2m_foreign_key.ManyToManyForeignKey(
                        on_delete=django.db.models.deletion.CASCADE,
                        related_name='_location_relations',
                        to='propositions.polymorphicproposition',
                        verbose_name='proposition',
                    ),
                ),
                (
                    'location',
                    core.fields.m2m_foreign_key.ManyToManyForeignKey(
                        on_delete=django.db.models.deletion.CASCADE,
                        related_name='propositions_location_set',
                        to='places.place',
                    ),
                ),
            ],
            options={
                'abstract': False,
            },
        ),
        migrations.AddField(
            model_name='polymorphicproposition',
            name='_locations',
            field=apps.places.models.model_with_locations.LocationsField(
                blank=True,
                related_name='polymorphicproposition_set',
                through='propositions.Location',
                to='places.Place',
                verbose_name='related quotes',
            ),
        ),
    ]
