# Generated by Django 5.1.1 on 2024-10-10 20:40

import django.db.models.deletion
from django.conf import settings
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('FuturoCiertoContent', '0007_alter_image_image'),
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
    ]

    operations = [
        migrations.CreateModel(
            name='news',
            fields=[
                ('NewID', models.AutoField(primary_key=True, serialize=False)),
                ('Title', models.CharField(max_length=255)),
                ('Content', models.TextField()),
                ('image', models.ImageField(null=True, upload_to='articles')),
                ('ImageUrl', models.CharField(max_length=255)),
                ('Description', models.CharField(max_length=255, null=True)),
                ('CreateAt', models.DateTimeField(auto_now_add=True)),
                ('UpdateAt', models.DateTimeField(auto_now=True, null=True)),
                ('Created_by', models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.SET_NULL, related_name='publication_creator', to=settings.AUTH_USER_MODEL)),
                ('Updated_by', models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.SET_NULL, related_name='publication_updater', to=settings.AUTH_USER_MODEL)),
            ],
        ),
        migrations.DeleteModel(
            name='image',
        ),
    ]
