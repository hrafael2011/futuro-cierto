# Generated by Django 5.1.1 on 2024-10-11 16:06

import django.db.models.deletion
import simple_history.models
from django.conf import settings
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('FuturoCiertoContent', '0012_alter_historicalnews_content_and_more'),
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
    ]

    operations = [
        migrations.CreateModel(
            name='educations',
            fields=[
                ('EducationID', models.AutoField(primary_key=True, serialize=False)),
                ('Title', models.CharField(max_length=255, verbose_name='Titulo')),
                ('Content', models.TextField(verbose_name='Contenido')),
                ('Image', models.ImageField(null=True, upload_to='articles_educations', verbose_name='Imagen')),
                ('TextAlt', models.CharField(max_length=255, verbose_name='Texto Alternativo')),
                ('Description', models.CharField(max_length=255, null=True, verbose_name='Descripción')),
                ('CreateAt', models.DateTimeField(auto_now_add=True)),
                ('UpdateAt', models.DateTimeField(auto_now=True, null=True)),
            ],
        ),
        migrations.AlterField(
            model_name='historicalnews',
            name='Description',
            field=models.CharField(max_length=255, null=True, verbose_name='Descripción'),
        ),
        migrations.AlterField(
            model_name='news',
            name='Description',
            field=models.CharField(max_length=255, null=True, verbose_name='Descripción'),
        ),
        migrations.CreateModel(
            name='Historicaleducations',
            fields=[
                ('EducationID', models.IntegerField(blank=True, db_index=True)),
                ('Title', models.CharField(max_length=255, verbose_name='Titulo')),
                ('Content', models.TextField(verbose_name='Contenido')),
                ('Image', models.TextField(max_length=100, null=True, verbose_name='Imagen')),
                ('TextAlt', models.CharField(max_length=255, verbose_name='Texto Alternativo')),
                ('Description', models.CharField(max_length=255, null=True, verbose_name='Descripción')),
                ('CreateAt', models.DateTimeField(blank=True, editable=False)),
                ('UpdateAt', models.DateTimeField(blank=True, editable=False, null=True)),
                ('history_id', models.AutoField(primary_key=True, serialize=False)),
                ('history_date', models.DateTimeField(db_index=True)),
                ('history_change_reason', models.CharField(max_length=100, null=True)),
                ('history_type', models.CharField(choices=[('+', 'Created'), ('~', 'Changed'), ('-', 'Deleted')], max_length=1)),
                ('history_user', models.ForeignKey(null=True, on_delete=django.db.models.deletion.SET_NULL, related_name='+', to=settings.AUTH_USER_MODEL)),
            ],
            options={
                'verbose_name': 'historical educations',
                'verbose_name_plural': 'historical educationss',
                'ordering': ('-history_date', '-history_id'),
                'get_latest_by': ('history_date', 'history_id'),
            },
            bases=(simple_history.models.HistoricalChanges, models.Model),
        ),
    ]
