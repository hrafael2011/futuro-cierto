from django.urls import path, include
from rest_framework.documentation import include_docs_urls
from rest_framework.routers import DefaultRouter
from .views import ( 
         navView,
         eventView, 
         logoView, 
         bannerView, 
         whoWeAreView, 
         missionValueView,
         newsView,
         educationView,
         causeView
        
         )       

router = DefaultRouter()

router.register(r'navigation', navView, basename='navigation')
router.register(r'event', eventView, basename='event')
router.register(r'logo',logoView, basename='logo')
router.register(r'banner',bannerView, basename='banner')
router.register(r'whoWeAre',whoWeAreView, basename='whoWeAre')
router.register(r'missionValues',missionValueView, basename='missionValues')
router.register(r'news',newsView, basename='news')
router.register(r'education',educationView, basename='education')
router.register(r'cause',causeView, basename='cause')

urlpatterns = [
    path("api/v1/", include(router.urls)),
    path('docs/', include_docs_urls(title="Futuro Cierto API"))

]