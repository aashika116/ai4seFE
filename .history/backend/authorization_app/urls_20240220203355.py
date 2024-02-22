from django.urls import path, include
from .views import (
    UserInfoView
)

urlpatterns = [
    path('', UserInfoView.as_view()),
]