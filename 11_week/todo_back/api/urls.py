from django.urls import path
from api import views

urlpatterns = [
    path('tasklist', views.TaskList_list),
    path('tasklist/<int:pk>/', views.TaskList_inf),
    path('tasklist/<int:pk>/task/', views.TaskList_task)


]
