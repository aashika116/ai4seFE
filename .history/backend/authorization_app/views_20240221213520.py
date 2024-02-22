from django.shortcuts import render
from rest_framework.views import APIView
from . models import *
from . serializer import *
from rest_framework.response import Response
from rest_framework import status

class UserInfoView(APIView):
    def get(self,request):
       user_info_list = UserInfo.objects.all()
       serializer = UserInfoSerializer(user_info_list, many=True)
           
       return Response("This is the get function ",serializer.data)
    
    def post(self,request):
       
        serializer=UserInfoSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data,status=201)
        return Response(serializer.errors,status=400)
        

        