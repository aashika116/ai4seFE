from django.urls import path, include
from .views import (
    UserInfoView
)

urlpatterns = [
    path('home', UserInfoView.as_view()),
]