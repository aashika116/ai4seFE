from rest_framework import serializers
from .models import *
from django.contrib.auth import authenticate

class UserInfoSerializer(serializers.ModelSerializer):
    class Meta:
        model=RegisterUser
        fields=['name','email','password']

    def validate(self,data):
        email=data.get('email')
        password=data.get('password')

        if email and password:
            user=authenticate()
