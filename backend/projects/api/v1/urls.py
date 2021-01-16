from django.urls import include, path
from rest_framework import routers
from backend.projects.api.v1.viewsets import SkillViewSet, ProjectViewSet, QuoteViewSet, BlogViewSet

router = routers.DefaultRouter()
router.register('skills', SkillViewSet)
router.register('projects', ProjectViewSet)
router.register('quotes', QuoteViewSet)
router.register('blogs', BlogViewSet)

# Wire up our API using automatic URL routing.
# Additionally, we include login URLs for the browsable API.
urlpatterns = [
    path('', include(router.urls)),
]