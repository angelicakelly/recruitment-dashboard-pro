from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import CandidateViewSet, TaskViewSet, SocialMentionViewSet

# Create a router and register our viewsets with it.
router = DefaultRouter()
router.register(r'candidates', CandidateViewSet, basename='candidate')
router.register(r'tasks', TaskViewSet, basename='task')
router.register(r'social-mentions', SocialMentionViewSet, basename='social-mention')

# The API URLs are now determined automatically by the router.
urlpatterns = [
    path('', include(router.urls)),
]
