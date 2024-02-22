from django.urls import path, include
from .views import (
    RegisterUserView, LoginUserView
)

urlpatterns = [
    path('register', RegisterUserView.as_view()),
    path('login', LoginUserView.as_view())

]