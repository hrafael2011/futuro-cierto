# Generated by Django 5.1.1 on 2024-10-10 18:09

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('FuturoCiertoContent', '0003_navigation_deleteat'),
    ]

    operations = [
        migrations.AlterField(
            model_name='navigation',
            name='is_active',
            field=models.BooleanField(default=True, verbose_name='Activo'),
        ),
    ]