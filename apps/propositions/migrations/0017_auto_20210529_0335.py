# Generated by Django 3.1.11 on 2021-05-29 03:35

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('propositions', '0016_auto_20210528_2223'),
    ]

    operations = [
        migrations.RenameField(
            model_name='polymorphicproposition',
            old_name='locations',
            new_name='old_locations',
        ),
    ]
