from django.shortcuts import render
from rest_framework.views import APIView
from . models import *
from . serializer import *
from rest_framework.response import Response

class UserInfoView(APIView):
    def get(self,request):
        output= [ {
            "name":output.name,
            "email":output.email
        }
            for output in UserInfo.objects.all()]
        return Response(output)