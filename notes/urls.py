from django.urls import path

from . import views

urlpatterns = [
    path('', views.ListNote.as_view()),
    path('<int:pk>/', views.DetailNote.as_view()),
]