# Generated by Django 5.1.1 on 2024-10-11 14:03

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('FuturoCiertoContent', '0008_news_delete_image'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='news',
            name='Created_by',
        ),
        migrations.RemoveField(
            model_name='news',
            name='Updated_by',
        ),
    ]