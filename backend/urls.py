from django.contrib import admin
from django.urls import include, path

urlpatterns = [
    path('project/', include('backend.projects.urls')),
]
