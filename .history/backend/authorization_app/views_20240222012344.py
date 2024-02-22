from django.shortcuts import render
from rest_framework.views import APIView
from django.contrib.auth.hashers import make_password
from . models import *
from . serializer import *
from rest_framework.response import Response
from rest_framework import status

class RegisterView(APIView):
    def get(self,request):
       user_info_list = Register.objects.all()
       serializer = UserInfoSerializer(user_info_list, many=True)
           
       return Response("This is the get function ",serializer.data)
    
    def post(self,request):
        hashed_password = make_password(request.data.get('password'))
        request.data['password'] = hashed_password
       
        serializer=UserInfoSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data,status=201)
        return Response(serializer.errors,status=400)
        

        