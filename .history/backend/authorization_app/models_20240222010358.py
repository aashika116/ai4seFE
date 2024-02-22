from django.db import models

class UserInfo(models.Model):
    name=models.CharField(max_length=50)
    email=models.CharField(max_length=50)
    password=models.CharField(max_length=200)
# Create your models here.
