from rest_framework import serializers
from .models import *
from django.contrib.auth import authenticate

class UserInfoSerializer(serializers.ModelSerializer):
    class Meta:
        model=RegisterUser
        fields=['name','email','password']

      

