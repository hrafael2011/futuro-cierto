# Generated by Django 5.1.1 on 2024-10-14 01:39

import django.db.models.deletion
import simple_history.models
from django.conf import settings
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('FuturoCiertoContent', '0020_educations_is_hidden_historicaleducations_is_hidden_and_more'),
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
    ]

    operations = [
        migrations.CreateModel(
            name='banner',
            fields=[
                ('BannerID', models.AutoField(primary_key=True, serialize=False)),
                ('Image', models.ImageField(blank=True, null=True, upload_to='banner', verbose_name='Imagen Banner')),
                ('TextAlt', models.CharField(blank=True, max_length=255, null=True, verbose_name='Texto Alternativo')),
                ('UpdateAt', models.DateTimeField(auto_now=True, null=True)),
                ('is_active', models.BooleanField(default=True, verbose_name='Activo')),
                ('is_hidden', models.BooleanField(default=False)),
            ],
        ),
        migrations.CreateModel(
            name='Historicalbanner',
            fields=[
                ('BannerID', models.IntegerField(blank=True, db_index=True)),
                ('Image', models.TextField(blank=True, max_length=100, null=True, verbose_name='Imagen Banner')),
                ('TextAlt', models.CharField(blank=True, max_length=255, null=True, verbose_name='Texto Alternativo')),
                ('UpdateAt', models.DateTimeField(blank=True, editable=False, null=True)),
                ('is_active', models.BooleanField(default=True, verbose_name='Activo')),
                ('is_hidden', models.BooleanField(default=False)),
                ('history_id', models.AutoField(primary_key=True, serialize=False)),
                ('history_date', models.DateTimeField(db_index=True)),
                ('history_change_reason', models.CharField(max_length=100, null=True)),
                ('history_type', models.CharField(choices=[('+', 'Created'), ('~', 'Changed'), ('-', 'Deleted')], max_length=1)),
                ('history_user', models.ForeignKey(null=True, on_delete=django.db.models.deletion.SET_NULL, related_name='+', to=settings.AUTH_USER_MODEL)),
            ],
            options={
                'verbose_name': 'historical banner',
                'verbose_name_plural': 'historical banners',
                'ordering': ('-history_date', '-history_id'),
                'get_latest_by': ('history_date', 'history_id'),
            },
            bases=(simple_history.models.HistoricalChanges, models.Model),
        ),
    ]