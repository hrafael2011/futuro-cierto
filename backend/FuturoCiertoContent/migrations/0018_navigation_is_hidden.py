# Generated by Django 5.1.1 on 2024-10-11 19:36

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('FuturoCiertoContent', '0017_educations_is_active_historicaleducations_is_active_and_more'),
    ]

    operations = [
        migrations.AddField(
            model_name='navigation',
            name='is_hidden',
            field=models.BooleanField(default=False),
        ),
    ]
