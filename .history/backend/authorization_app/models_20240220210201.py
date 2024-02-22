from django.db import models

class UserInfo(models.Model):
    name=models.CharField(max_length=50)
    email=models.CharField(max_length=50)
    username=models.CharField(max_length=100,default=null)
# Create your models here.
