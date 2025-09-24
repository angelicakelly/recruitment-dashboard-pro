from rest_framework import serializers
from .models import Candidate, Task, SocialMention

class CandidateSerializer(serializers.ModelSerializer):
    class Meta:
        model = Candidate
        fields = '__all__'

class TaskSerializer(serializers.ModelSerializer):
    class Meta:
        model = Task
        fields = '__all__'

class SocialMentionSerializer(serializers.ModelSerializer):
    class Meta:
        model = SocialMention
        fields = '__all__'
