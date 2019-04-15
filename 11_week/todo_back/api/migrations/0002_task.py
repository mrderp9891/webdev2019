# Generated by Django 2.2 on 2019-04-08 15:19

from django.db import migrations, models
import django.db.models.deletion
import datetime


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0001_initial'),
    ]

    operations = [
        migrations.CreateModel(
            name='Task',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=200)),
                ('creat_at', models.DateTimeField()),
                ('due_to', models.DateTimeField()),
                ('status', models.CharField(max_length=200)),
                ('task_list', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='api.TaskList')),
            ],
        ),
    ]