from django.shortcuts import render
from rest_framework.views import APIView
from django.contrib.auth.hashers import make_password,check_password
from . models import *
from . serializer import *
from rest_framework.response import Response
from rest_framework import status
from django.contrib.auth import authenticate, login
from .tokens import generate_jwt_token


class RegisterUserView(APIView):
    def get(self,request):
       user_info_list = RegisterUser.objects.all()
       serializer = UserInfoSerializer(user_info_list)
           
       return Response(serializer.data)
    
    def post(self,request):
        hashed_password = make_password(request.data.get('password'))
        request.data['password'] = hashed_password
       
        serializer=UserInfoSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data,status=201)
        return Response(serializer.errors,status=400)
        

class LoginUserView(APIView):
    def post(self, request):
        email = request.data.get('email')
        password = request.data.get('password')

        try:
            user = RegisterUser.objects.get(email=email)
        except RegisterUser.DoesNotExist:
            return Response("Invalid credentials", status=status.HTTP_401_UNAUTHORIZED)

        if check_password(password, user.password):
            token = generate_jwt_token(user)
            return Response({"message": "Login is successful", "token": token}, status=status.HTTP_200_OK)
        else:
            return Response("Invalid credentials", status=status.HTTP_401_UNAUTHORIZED)