# Generated by Django 5.1.1 on 2024-10-10 15:07

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('FuturoCiertoContent', '0002_alter_navigation_options_remove_navigation_deleteat_and_more'),
    ]

    operations = [
        migrations.AddField(
            model_name='navigation',
            name='DeleteAt',
            field=models.DateTimeField(blank=True, null=True, verbose_name='Eliminar'),
        ),
    ]