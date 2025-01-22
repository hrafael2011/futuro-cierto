from rest_framework import serializers
import requests

from django.utils.html import linebreaks
from django.utils.translation import get_language
from .models import (navigation, 
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
                    accountBank)


class navSerializer(serializers.ModelSerializer):
    
   
    PageName = serializers.SerializerMethodField()

    def get_PageName(self, obj):
        # Obtiene el idioma del contexto
        language = self.context.get('language', 'es')  # Por defecto, español
        return obj.PageName_en if language == 'en' else obj.PageName

    class Meta:
        model = navigation
        fields = ("NavId", "PageName","PageName_en","Url", "is_hidden")
       

  


class newsSerializer(serializers.ModelSerializer):
    formatted_text = serializers.SerializerMethodField()
    Title = serializers.SerializerMethodField()
    Content = serializers.SerializerMethodField() 
    Image = serializers.SerializerMethodField()

    class Meta:
        model = news
        fields = ("NewID","formatted_text","Title","Title_en","Content","Content_en","Image", "TextAlt","CreateAt")

    def get_formatted_text(self, obj):
        # Obtén el idioma desde el contexto o usa 'es' como predeterminado
        language = self.context.get('language', 'es')

        # Selecciona el texto formateado según el idioma
        text = obj.Content_en if language == 'en' else obj.Content

        # Convierte los saltos de línea en etiquetas HTML
        return linebreaks(text)

    
    def get_Title(self, obj):
        language = self.context.get('language', 'es')
        return obj.Title_en if language == 'en' else obj.Title
    
    def get_Content(self, obj):
        language = self.context.get('language', 'es')
        return obj.Content_en if language == 'en' else obj.Content
    
    
    def get_Image(self, obj):
    # Verifica si el objeto tiene una imagen y su URL
     if obj.Image:
        request = self.context.get('request')
        if request:
            return request.build_absolute_uri(obj.Image.url)  # Devuelve la URL completa
        return obj.Image.url  # Devuelve la URL relativa si no hay request
     return None  # Devuelve None si no hay imagen

    
    

class educationSerializer(serializers.ModelSerializer):
    formatted_text = serializers.SerializerMethodField()
    Title = serializers.SerializerMethodField()
    Content = serializers.SerializerMethodField() 
    Image = serializers.SerializerMethodField()

    class Meta:
        model = educations
        fields = ("EducationID","formatted_text","Title","Title_en","Content","Content_en","Image", "TextAlt","CreateAt")

    def get_formatted_text(self, obj):
        # Obtén el idioma desde el contexto o usa 'es' como predeterminado
        language = self.context.get('language', 'es')

        # Selecciona el texto formateado según el idioma
        text = obj.Content_en if language == 'en' else obj.Content

        # Convierte los saltos de línea en etiquetas HTML
        return linebreaks(text)

    
    def get_Title(self, obj):
        language = self.context.get('language', 'es')
        return obj.Title_en if language == 'en' else obj.Title
    
    def get_Content(self, obj):
        language = self.context.get('language', 'es')
        return obj.Content_en if language == 'en' else obj.Content
    
    
    def get_Image(self, obj):
    # Verifica si el objeto tiene una imagen y su URL
     if obj.Image:
        request = self.context.get('request')
        if request:
            return request.build_absolute_uri(obj.Image.url)  # Devuelve la URL completa
        return obj.Image.url  # Devuelve la URL relativa si no hay request
     return None  # Devuelve None si no hay imagen


class logoSerializer(serializers.ModelSerializer):
    class Meta:
        model = logo
        fields = ("LogoID","Image","TextAlt")

class missionValuesSerializer(serializers.ModelSerializer):

    Title_mission = serializers.SerializerMethodField()
    Content_mission = serializers.SerializerMethodField()
    Title_objetive = serializers.SerializerMethodField()
    Content_objetive = serializers.SerializerMethodField()
    Title_motivation = serializers.SerializerMethodField()
    Content_motivation = serializers.SerializerMethodField()


    def get_Title_mission(self, obj):
        # Obtiene el idioma del contexto
        language = self.context.get('language', 'es')  # Por defecto, español
        return obj.Title_mission_en if language == 'en' else obj.Title_mission
    
    def get_Content_mission(self, obj):
        # Obtiene el idioma del contexto
        language = self.context.get('language', 'es')  # Por defecto, español
        return obj.Content_mission_en if language == 'en' else obj.Content_mission
    
    def get_Title_objetive(self, obj):
        # Obtiene el idioma del contexto
        language = self.context.get('language', 'es')  # Por defecto, español
        return obj.Title_objetive_en if language == 'en' else obj.Title_objetive

    def get_Content_objetive(self, obj):
        # Obtiene el idioma del contexto
        language = self.context.get('language', 'es')  # Por defecto, español
        return obj.Content_objetive_en if language == 'en' else obj.Content_objetive
    
    def get_Title_motivation(self, obj):
        # Obtiene el idioma del contexto
        language = self.context.get('language', 'es')  # Por defecto, español
        return obj.Title_motivation_en if language == 'en' else obj.Title_motivation
    
    def get_Content_motivation(self, obj):
        # Obtiene el idioma del contexto
        language = self.context.get('language', 'es')  # Por defecto, español
        return obj.Content_motivation_en if language == 'en' else obj.Content_motivation


    class Meta:
        model = missionValues
        fields = ("missionValuesID","Title_mission","Title_mission_en","Content_mission","Content_mission_en","Content_objetive",
                  "Content_objetive_en","Title_objetive","Title_objetive_en","Title_motivation","Title_motivation_en","Content_motivation","Content_motivation_en")

class whoWeAreSerializer(serializers.ModelSerializer):


    Title = serializers.SerializerMethodField()
    Content = serializers.SerializerMethodField()


    def get_Title(self, obj):
        # Obtiene el idioma del contexto
        language = self.context.get('language', 'es')  # Por defecto, español
        return obj.Title_en if language == 'en' else obj.Title
    
    def get_Content(self, obj):
        # Obtiene el idioma del contexto
        language = self.context.get('language', 'es')  # Por defecto, español
        return obj.Content_en if language == 'en' else obj.Content

    class Meta:
        model = whoWeAre
        fields = ("whoWeAreID","Title","Content","Title_en","Content_en")

class bannerSerializer(serializers.ModelSerializer):
 
    url_name = serializers.CharField(source='Url.Url', read_only=True)
    url_id = serializers.IntegerField(source='Url.NavId', read_only=True)  # Campo adicional para el ID

    class Meta:
        model = banner
        fields = ('BannerID','Image', 'url_name','url_id', 'TextAlt')

class eventSerializer(serializers.ModelSerializer):

    Event = serializers.SerializerMethodField()
    Address = serializers.SerializerMethodField()


    def get_Event(self, obj):
        # Obtiene el idioma del contexto
        language = self.context.get('language', 'es')  # Por defecto, español
        return obj.Event_en if language == 'en' else obj.Event
    
    def get_Address(self, obj):
        # Obtiene el idioma del contexto
        language = self.context.get('language', 'es')  # Por defecto, español
        return obj.Address_en if language == 'en' else obj.Address

    class Meta:
        model = event
        fields = ('EventID', 'Event','Address', 'Event_en','Address_en','EventDate', 'Image', 'TextAlt')

class causeSerializer(serializers.ModelSerializer):

    Cause = serializers.SerializerMethodField()
    Title = serializers.SerializerMethodField()
    Description = serializers.SerializerMethodField()


    def get_Cause(self, obj):
        # Obtiene el idioma del contexto
        language = self.context.get('language', 'es')  # Por defecto, español
        return obj.Cause_en if language == 'en' else obj.Cause
    
    def get_Title(self, obj):
        # Obtiene el idioma del contexto
        language = self.context.get('language', 'es')  # Por defecto, español
        return obj.Title_en if language == 'en' else obj.Title
    
    def get_Description(self, obj):
        # Obtiene el idioma del contexto
        language = self.context.get('language', 'es')  # Por defecto, español
        return obj.Description_en if language == 'en' else obj.Description

    class Meta:
        model = causes
        fields = ('CauseID','Cause', 'Cause_en','Image','Title','Description','Title_en','Description_en','TextAlt')

class collaboratorSerializer(serializers.ModelSerializer):
    class Meta:
        model = collaborator
        fields = ('CollaboratorID','Name', 'Image','Description','TextAlt')


class videoSerializer(serializers.ModelSerializer):
    class Meta:
        model = video
        fields = ('VideoID','Title', 'VideoFile')

class whatOurDonorsSaySerializer(serializers.ModelSerializer):

    formatted_comment1 = serializers.SerializerMethodField()
    formatted_comment2 = serializers.SerializerMethodField()
    formatted_comment3 = serializers.SerializerMethodField()
    

    class Meta:
        model = whatOurDonorsSay
        fields = ('DonorsSayID','Comment1','Comment2','Comment3','Comment1_en','Comment2_en','Comment3_en', 'Image', 'TextAlt', 
                  'formatted_comment1', 'formatted_comment2', 'formatted_comment3')
    def get_formatted_comment1(self, obj):
       
        # Obtén el idioma desde el contexto o usa 'es' como predeterminado
        language = self.context.get('language', 'es')
        # Selecciona el texto formateado según el idioma
        text = obj.Comment1_en if language == 'en' else obj.Comment1
        # Usa `linebreaks` para que Django convierta los saltos de línea en HTML
        return linebreaks(text)
       
    def get_formatted_comment2(self, obj):
        # Obtén el idioma desde el contexto o usa 'es' como predeterminado
        language = self.context.get('language', 'es')
        # Selecciona el texto formateado según el idioma
        text = obj.Comment2_en if language == 'en' else obj.Comment2
        # Usa `linebreaks` para que Django convierta los saltos de línea en HTML
        return linebreaks(text)
    
    def get_formatted_comment3(self, obj):
        # Obtén el idioma desde el contexto o usa 'es' como predeterminado
        language = self.context.get('language', 'es')
        # Selecciona el texto formateado según el idioma
        text = obj.Comment3_en if language == 'en' else obj.Comment3
        # Usa `linebreaks` para que Django convierta los saltos de línea en HTML
        return linebreaks(text)
    
        
class contactSerializer(serializers.ModelSerializer):
    class Meta:
        model = contact
        fields = ('ContactID','Phone', 'Email','LinkFacebook','LinkInstagram','LinkTweeter')


class accountBankSerializer(serializers.ModelSerializer):

    currency_name = serializers.CharField(source='Currency.Currency', read_only=True)
    currency_ID = serializers.IntegerField(source='Currency.CurrencyID', read_only=True)  # Campo adicional para el ID
    class Meta:
        model = accountBank
        fields = ('AccountID','Bank', 'Account','Currency','currency_name','currency_ID')

  