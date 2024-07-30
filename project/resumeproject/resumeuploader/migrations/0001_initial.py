# Generated by Django 4.2.3 on 2024-02-28 06:36

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Resume',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(default='', max_length=100)),
                ('gender', models.CharField(default='', max_length=10)),
                ('dob', models.CharField(default='', max_length=25)),
                ('locality', models.CharField(default='', max_length=150)),
                ('states', models.CharField(default='', max_length=150)),
                ('city', models.CharField(default='', max_length=150)),
                ('email', models.EmailField(default='', max_length=100)),
                ('mobileno', models.PositiveIntegerField(default='')),
                ('pin', models.PositiveIntegerField(default='')),
                ('job_city', models.CharField(default='', max_length=100)),
                ('prfl_image', models.ImageField(upload_to='static/')),
                ('file_image', models.FileField(upload_to='static/')),
            ],
        ),
    ]
