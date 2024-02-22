from django.shortcuts import render
from rest_framework.views import APIView
from . models import *
from . serializer import *
from rest_framework.response import Response

class UserInfoView(APIView):
    def get(self,request):
        return("hello")

        {#
        output= [ {
            "name":output.name,
            "email":output.email
                }
            for output in UserInfo.objects.all()]
        return Response("This is the get function ",output)
    
    def post(self,request):
        data={
            'name':request.data.get('name'),
            'email':request.data.get('email')
        }
        serializer=UserInfoSerializer(data=data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors)

        #}