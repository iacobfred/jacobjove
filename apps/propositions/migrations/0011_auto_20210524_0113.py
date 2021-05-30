# Generated by Django 3.1.11 on 2021-05-24 01:13

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('propositions', '0010_auto_20210522_1923'),
    ]

    operations = [
        migrations.AlterField(
            model_name='polymorphicproposition',
            name='title',
            field=models.CharField(
                blank=True,
                help_text='The title can be used for the detail page header and title tag, SERP result card header, etc. It should be a noun phrase!',
                max_length=120,
                null=True,
                verbose_name='title',
            ),
        ),
    ]
