from django.urls import path, include
from .views import (
    UserInfoView
)

urlpatterns = [
    path('register', UserInfoView.as_view()),
    path('login', UserInfoView.as_view())

]