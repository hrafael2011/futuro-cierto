
from rest_framework import viewsets
from .models import navigation, news, educations, logo, missionValues, whoWeAre, banner, event, causes, collaborator, video, whatOurDonorsSay, contact, currency, accountBank
from .serializer import (navSerializer, 
                         newsSerializer, 
                         educationSerializer, 
                         logoSerializer, 
                         missionValuesSerializer, 
                         whoWeAreSerializer, 
                         bannerSerializer, eventSerializer, 
                         causeSerializer,
                           collaboratorSerializer,
                           videoSerializer,
                           whatOurDonorsSaySerializer,
                           contactSerializer, 
                           accountBankSerializer)



from django.http import HttpResponse

def home(request):
    return HttpResponse("¡Bienvenido a la página de inicio!")


# Create your views here.

class navView(viewsets.ModelViewSet):
    queryset  = navigation.objects.filter(is_active=True)
    serializer_class = navSerializer

    def get_serializer_context(self):
    # Asegúrate de que `self.request` no sea None antes de acceder a `headers`
        if self.request and hasattr(self.request, 'headers'):
            language = self.request.headers.get('Accept-Language', 'es')[:2]
        else:
            language = 'es'  # Valor predeterminado
        return {'language': language}



class newsView(viewsets.ModelViewSet):
    queryset = news.objects.filter(is_active=True)
    serializer_class = newsSerializer

    def get_serializer_context(self):
        context = super().get_serializer_context()
        language = self.request.headers.get('Accept-Language', 'es')[:2]  # Idioma
        context.update({'language': language, 'request': self.request})  # Incluye 'request'
        return context


class educationView(viewsets.ModelViewSet):
    queryset = educations.objects.filter(is_active=True)
    serializer_class = educationSerializer

    def get_serializer_context(self):
        context = super().get_serializer_context()
        language = self.request.headers.get('Accept-Language', 'es')[:2]  # Idioma
        context.update({'language': language, 'request': self.request})  # Incluye 'request'
        return context

class logoView(viewsets.ModelViewSet):
    queryset = logo.objects.filter(is_active=True)
    serializer_class = logoSerializer

class missionValueView(viewsets.ModelViewSet):
    queryset = missionValues.objects.filter(is_active=True)
    serializer_class = missionValuesSerializer

    def get_serializer_context(self):
        context = super().get_serializer_context()
        language = self.request.headers.get('Accept-Language', 'es')[:2]  # Idioma
        context.update({'language': language, 'request': self.request})  # Incluye 'request'
        return context

class whoWeAreView(viewsets.ModelViewSet):
    queryset = whoWeAre.objects.filter(is_active=True)
    serializer_class = whoWeAreSerializer

    def get_serializer_context(self):
        context = super().get_serializer_context()
        language = self.request.headers.get('Accept-Language', 'es')[:2]  # Idioma
        context.update({'language': language, 'request': self.request})  # Incluye 'request'
        return context

class bannerView(viewsets.ModelViewSet):
    queryset = banner.objects.filter(is_active=True).select_related('Url')
    serializer_class = bannerSerializer

class eventView(viewsets.ModelViewSet):
    queryset = event.objects.filter(is_active=True)
    serializer_class = eventSerializer

    def get_serializer_context(self):
        context = super().get_serializer_context()
        language = self.request.headers.get('Accept-Language', 'es')[:2]  # Idioma
        context.update({'language': language, 'request': self.request})  # Incluye 'request'
        return context

class causeView(viewsets.ModelViewSet):
    queryset = causes.objects.filter(is_active=True)
    serializer_class = causeSerializer

    def get_serializer_context(self):
        context = super().get_serializer_context()
        language = self.request.headers.get('Accept-Language', 'es')[:2]  # Idioma
        context.update({'language': language, 'request': self.request})  # Incluye 'request'
        return context


class collaboratorView(viewsets.ModelViewSet):
    queryset = collaborator.objects.filter(is_active=True)
    serializer_class = collaboratorSerializer



class videoView(viewsets.ModelViewSet):
    queryset = video.objects.filter(is_active=True)
    serializer_class = videoSerializer

class whatOurDonorsSayView(viewsets.ModelViewSet):
    queryset = whatOurDonorsSay.objects.filter(is_active=True)
    serializer_class = whatOurDonorsSaySerializer

    def get_serializer_context(self):
        context = super().get_serializer_context()
        language = self.request.headers.get('Accept-Language', 'es')[:2]  # Idioma
        context.update({'language': language, 'request': self.request})  # Incluye 'request'
        return context

class contactView(viewsets.ModelViewSet):
    queryset = contact.objects.filter(is_active=True)
    serializer_class = contactSerializer

class accountBankView(viewsets.ModelViewSet):
    queryset = accountBank.objects.filter(is_active=True).select_related('Currency')
    serializer_class = accountBankSerializer

class currencyView(viewsets.ModelViewSet):
    queryset = currency.objects.filter(is_active=True)
    