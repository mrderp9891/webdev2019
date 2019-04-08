from django.db import models
from datetime import datetime, timedelta

class TaskList(models.Model):
    name = models.CharField(max_length=200)

class Task(models.Model):
    name = models.CharField(max_length=200)
    creat_at = models.DateTimeField(default=datetime.now(), blank=True)
    due_to = datetime.now() + timedelta(days=1)
    status = models.CharField(max_length=200)
    task_list = models.ForeignKey(TaskList, on_delete=models.CASCADE)