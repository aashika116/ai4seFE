from django.urls import path, include
from .views import (
    RegisterUserView
)

urlpatterns = [
    path('register', RegisterUser.as_view()),
    path('login', UserInfoView.as_view())

]