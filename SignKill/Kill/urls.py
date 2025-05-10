from django.contrib import admin
from django.shortcuts import render
from django.urls import include, path
from Kill import views

def dec(request):
    return render(request, 'index.html')
urlpatterns = [
    path('',views.dec,name="Start"),
    path('camera/', views.camera_feed, name='Detection'),
    path('save/', views.save, name='save'),
]
