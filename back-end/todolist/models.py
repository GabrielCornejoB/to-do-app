from django.db import models

class Task(models.Model):
    created = models.DateTimeField(auto_now_add=True)
    title = models.CharField(max_length=100)
    description = models.TextField()
    completed = models.BooleanField()
    owner = models.ForeignKey('auth.user', related_name='tasks', on_delete=models.CASCADE)

    class Meta:
        ordering = ['created']
