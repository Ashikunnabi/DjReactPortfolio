from backend.projects.models import Skill, Project, Quote
from rest_framework import serializers


class SkillSerializer(serializers.ModelSerializer):
    class Meta:
        model = Skill
        fields = '__all__'


class ProjectSerializer(serializers.ModelSerializer):
    thirty_words_description = serializers.SerializerMethodField()
    
    class Meta:
        model = Project
        fields = '__all__'
        
    def get_thirty_words_description(self, obj):
        return ' '.join(obj.description.split()[:30])


class QuoteSerializer(serializers.ModelSerializer):    
    class Meta:
        model = Quote
        fields = '__all__'