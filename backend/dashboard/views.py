
# Handles HTTP requests for the dashboard API
# Add task and project request handlers here as features are built

from rest_framework.decorators import api_view
from rest_framework.response import Response

@api_view(['GET'])
def api_status(request):
    """ Return a simple response showing that the API route is available. """
    return Response({
        "status": "API is running",
        "service": "personal-dashboard-api"
    })