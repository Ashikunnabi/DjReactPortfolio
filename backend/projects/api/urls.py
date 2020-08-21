from django.contrib import admin
from django.urls import include, path

urlpatterns = [
    path('v1/', include('backend.projects.api.v1.urls')),
]
