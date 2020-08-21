from backend.projects.models import Skill, Project, Quote
from rest_framework import viewsets
from rest_framework import permissions
from backend.projects.api.v1.serializers import SkillSerializer, ProjectSerializer, QuoteSerializer
from rest_framework.pagination import PageNumberPagination

class StandardResultsSetPagination(PageNumberPagination):
    page_size = 10
    page_size_query_param = 'page_size'
    max_page_size = 1000


class SkillViewSet(viewsets.ModelViewSet):
    """
    API endpoint that allows skills to be viewed or edited.
    """
    queryset = Skill.objects.all().order_by('rank')
    serializer_class = SkillSerializer


class ProjectViewSet(viewsets.ModelViewSet):
    """
    API endpoint that allows project to be viewed or edited.
    """
    pagination_class = StandardResultsSetPagination
    queryset = Project.objects.all().order_by('rank')
    serializer_class = ProjectSerializer


class QuoteViewSet(viewsets.ModelViewSet):
    """
    API endpoint that allows quote to be viewed or edited.
    """
    queryset = Quote.objects.all()
    serializer_class = QuoteSerializer