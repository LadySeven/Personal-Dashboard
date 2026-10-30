# Maps dashboard API paths to their views.
# Keep dashboard-specific routes in this file.

from django.urls import path
from .views import api_status

urlpatterns = [
    path('status/', api_status, name='api_status'),
]