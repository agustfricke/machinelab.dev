# Generated by Django 3.2 on 2023-01-16 15:59

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('cursos', '0002_initial'),
    ]

    operations = [
        migrations.AlterField(
            model_name='curso',
            name='price',
            field=models.CharField(blank=True, max_length=250, null=True),
        ),
    ]