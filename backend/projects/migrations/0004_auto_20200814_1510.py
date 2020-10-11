# Generated by Django 3.1 on 2020-08-14 09:10

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('projects', '0003_auto_20200814_1428'),
    ]

    operations = [
        migrations.AlterField(
            model_name='project',
            name='github',
            field=models.CharField(blank=True, max_length=2000, null=True),
        ),
        migrations.AlterField(
            model_name='project',
            name='image',
            field=models.FileField(blank=True, null=True, upload_to=''),
        ),
        migrations.AlterField(
            model_name='project',
            name='video',
            field=models.CharField(blank=True, max_length=2000, null=True),
        ),
        migrations.AlterField(
            model_name='project',
            name='website',
            field=models.CharField(blank=True, max_length=2000, null=True),
        ),
    ]