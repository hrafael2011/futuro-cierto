from rest_framework import viewsets
from .models import (
    navigation,
    news,
    educations,
    logo,
    missionValues,
    whoWeAre,
    banner,
    event,
    causes,
    collaborator,
    video,
    whatOurDonorsSay,
    contact,
    currency,
    accountBank,
)
from .serializer import (
    navSerializer,
    newsSerializer,
    educationSerializer,
    logoSerializer,
    missionValuesSerializer,
    whoWeAreSerializer,
    bannerSerializer,
    eventSerializer,
    causeSerializer,
    collaboratorSerializer,
    videoSerializer,
    whatOurDonorsSaySerializer,
    contactSerializer,
    accountBankSerializer,
)




# Create your views here.


class navView(viewsets.ModelViewSet):
    queryset = navigation.objects.filter(is_active=True)
    serializer_class = navSerializer

    def get_serializer_context(self):
        # Make sure that self.request is not None before accessing headers.
        if self.request and hasattr(self.request, "headers"):
            language = self.request.headers.get("Accept-Language", "es")[:2]
        else:
            language = "es"  # default value
        return {"language": language}


class newsView(viewsets.ModelViewSet):
    queryset = news.objects.filter(is_active=True)
    serializer_class = newsSerializer

    def get_serializer_context(self):
        context = super().get_serializer_context()
        
        # Verifica que self.request no es None antes de acceder a headers
        language = "es"  # Valor por defecto
        if self.request is not None and hasattr(self.request, "headers"):
            language = self.request.headers.get("Accept-Language", "es")[:2]
        
        context.update({"language": language, "request": self.request})
        return context


class educationView(viewsets.ModelViewSet):
    queryset = educations.objects.filter(is_active=True)
    serializer_class = educationSerializer

    def get_serializer_context(self):
        context = super().get_serializer_context()
        
        # Verifica que self.request no es None antes de acceder a headers
        language = "es"  # Valor por defecto
        if self.request is not None and hasattr(self.request, "headers"):
            language = self.request.headers.get("Accept-Language", "es")[:2]
        
        context.update({"language": language, "request": self.request})
        return context


class logoView(viewsets.ModelViewSet):
    queryset = logo.objects.filter(is_active=True)
    serializer_class = logoSerializer


class missionValueView(viewsets.ModelViewSet):
    queryset = missionValues.objects.filter(is_active=True)
    serializer_class = missionValuesSerializer

    def get_serializer_context(self):
        context = super().get_serializer_context()
        
        # Verifica que self.request no es None antes de acceder a headers
        language = "es"  # Valor por defecto
        if self.request is not None and hasattr(self.request, "headers"):
            language = self.request.headers.get("Accept-Language", "es")[:2]
        
        context.update({"language": language, "request": self.request})
        return context


class whoWeAreView(viewsets.ModelViewSet):
    queryset = whoWeAre.objects.filter(is_active=True)
    serializer_class = whoWeAreSerializer

    def get_serializer_context(self):
        context = super().get_serializer_context()
        
        # Verifica que self.request no es None antes de acceder a headers
        language = "es"  # Valor por defecto
        if self.request is not None and hasattr(self.request, "headers"):
            language = self.request.headers.get("Accept-Language", "es")[:2]
        
        context.update({"language": language, "request": self.request})
        return context


class bannerView(viewsets.ModelViewSet):
    queryset = banner.objects.filter(is_active=True)
    serializer_class = bannerSerializer

    def get_serializer_context(self):
        # Pasar el contexto del request al serializador
        context = super().get_serializer_context()
        context['request'] = self.request
        return context



class eventView(viewsets.ModelViewSet):
    queryset = event.objects.filter(is_active=True)
    serializer_class = eventSerializer

    def get_serializer_context(self):
        context = super().get_serializer_context()
        
        # Verifica que self.request no es None antes de acceder a headers
        language = "es"  # Valor por defecto
        if self.request is not None and hasattr(self.request, "headers"):
            language = self.request.headers.get("Accept-Language", "es")[:2]
        
        context.update({"language": language, "request": self.request})
        return context



class causeView(viewsets.ModelViewSet):
    queryset = causes.objects.filter(is_active=True)
    serializer_class = causeSerializer

    def get_serializer_context(self):
        context = super().get_serializer_context()
        
        # Verifica que self.request no es None antes de acceder a headers
        language = "es"  # Valor por defecto
        if self.request is not None and hasattr(self.request, "headers"):
            language = self.request.headers.get("Accept-Language", "es")[:2]
        
        context.update({"language": language, "request": self.request})
        return context

class collaboratorView(viewsets.ModelViewSet):
    queryset = collaborator.objects.filter(is_active=True)
    serializer_class = collaboratorSerializer

    def get_serializer_context(self):
        # Pasar el objeto request al contexto
        context = super().get_serializer_context()
        context['request'] = self.request
        return context

    


class videoView(viewsets.ModelViewSet):
    queryset = video.objects.filter(is_active=True)
    serializer_class = videoSerializer


class whatOurDonorsSayView(viewsets.ModelViewSet):
    queryset = whatOurDonorsSay.objects.filter(is_active=True)
    serializer_class = whatOurDonorsSaySerializer

    def get_serializer_context(self):
        context = super().get_serializer_context()
        
        # Verifica que self.request no es None antes de acceder a headers
        language = "es"  # Valor por defecto
        if self.request is not None and hasattr(self.request, "headers"):
            language = self.request.headers.get("Accept-Language", "es")[:2]
        
        context.update({"language": language, "request": self.request})
        return context


class contactView(viewsets.ModelViewSet):
    queryset = contact.objects.filter(is_active=True)
    serializer_class = contactSerializer


class accountBankView(viewsets.ModelViewSet):
    queryset = accountBank.objects.filter(is_active=True).select_related("Currency")
    serializer_class = accountBankSerializer


class currencyView(viewsets.ModelViewSet):
    queryset = currency.objects.filter(is_active=True)
