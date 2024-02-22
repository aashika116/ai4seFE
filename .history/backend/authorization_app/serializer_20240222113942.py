from rest_framework import serializers
from .models import *
from django.contrib.auth import authenticate

class UserInfoSerializer(serializers.ModelSerializer):
    class Meta:
        model=RegisterUser
        fields=['name','email','password']

        """

    def validate(self,data):
        email=data.get('email')
        password=data.get('password')

        if email and password:
            user=authenticate(email=email,password=password)
            if user:
                data['user']=user
            else:
                raise serializers.ValidationError("Invalid Credentials")
        else:
            raise serializers.ValidationError("Must include username and password")
        
        return data

        """
