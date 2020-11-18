# Generated by Django 3.1.2 on 2020-10-31 08:14

import django.db.models.deletion
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('images', '0003_auto_20201020_0704'),
        ('entities', '0001_initial'),
    ]

    operations = [
        migrations.AlterField(
            model_name='entityimage',
            name='entity',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='image_relations', to='entities.entity'),
        ),
        migrations.AlterField(
            model_name='entityimage',
            name='image',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='entity_relations', to='images.image'),
        ),
    ]
