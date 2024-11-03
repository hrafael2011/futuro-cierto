
from rest_framework import viewsets
from .models import navigation, news, educations, logo, missionValues, whoWeAre, banner, event, causes
from .serializer import navSerializer, newsSerializer, educationSerializer, logoSerializer, missionValuesSerializer, whoWeAreSerializer, bannerSerializer, eventSerializer, causeSerializer



# Create your views here.
class navView(viewsets.ModelViewSet):
    queryset  = navigation.objects.filter(is_active=True)
    serializer_class = navSerializer

class newsView(viewsets.ModelViewSet):
    queryset = news.objects.filter(is_active=True)
    serializer_class = newsSerializer

class educationView(viewsets.ModelViewSet):
    queryset = educations.objects.filter(is_active=True)
    serializer_class = educationSerializer

class logoView(viewsets.ModelViewSet):
    queryset = logo.objects.filter(is_active=True)
    serializer_class = logoSerializer

class missionValueView(viewsets.ModelViewSet):
    queryset = missionValues.objects.filter(is_active=True)
    serializer_class = missionValuesSerializer

class whoWeAreView(viewsets.ModelViewSet):
    queryset = whoWeAre.objects.filter(is_active=True)
    serializer_class = whoWeAreSerializer

class bannerView(viewsets.ModelViewSet):
    queryset = banner.objects.filter(is_active=True).select_related('Url')
    serializer_class = bannerSerializer

class eventView(viewsets.ModelViewSet):
    queryset = event.objects.filter(is_active=True)
    serializer_class = eventSerializer

class causeView(viewsets.ModelViewSet):
    queryset = causes.objects.filter(is_active=True)
    serializer_class = causeSerializer