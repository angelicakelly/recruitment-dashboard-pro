from django.shortcuts import render

# Create your views here.
from rest_framework import viewsets
from .models import Candidate, Task, SocialMention
from .serializers import CandidateSerializer, TaskSerializer, SocialMentionSerializer

class CandidateViewSet(viewsets.ModelViewSet):
    queryset = Candidate.objects.all()
    serializer_class = CandidateSerializer

class TaskViewSet(viewsets.ModelViewSet):
    queryset = Task.objects.all()
    serializer_class = TaskSerializer

class SocialMentionViewSet(viewsets.ModelViewSet):
    queryset = SocialMention.objects.all()
    serializer_class = SocialMentionSerializer
