from rest_framework import serializers
from django.utils.html import linebreaks
from django.conf import settings
from .models import (
    navigation, news, educations, logo, missionValues, whoWeAre, banner, event,
    causes, collaborator, video, whatOurDonorsSay, contact, currency, accountBank
)


def get_field_based_on_language(obj, field_name, context, field_name_en):
    language = context.get('language', 'es')  # For dejault in spanish
    return getattr(obj, field_name_en) if language == 'en' else getattr(obj, field_name)

class navSerializer(serializers.ModelSerializer):
    PageName = serializers.SerializerMethodField()

    def get_PageName(self, obj):
        return get_field_based_on_language(obj, 'PageName', self.context, 'PageName_en')

    class Meta:
        model = navigation
        fields = ("NavId", "PageName", "PageName_en", "Url", "is_hidden")

class newsSerializer(serializers.ModelSerializer):
    formatted_text = serializers.SerializerMethodField()
    Title = serializers.SerializerMethodField()
    Content = serializers.SerializerMethodField()
    Image = serializers.SerializerMethodField()

    class Meta:
        model = news
        fields = ("NewID", "formatted_text", "Title", "Title_en", "Content", "Content_en", "Image", "TextAlt", "CreateAt")

    def get_formatted_text(self, obj):
        language = self.context.get('language', 'es')
        text = obj.Content_en if language == 'en' else obj.Content
        return linebreaks(text)

    def get_Title(self, obj):
        return get_field_based_on_language(obj, 'Title', self.context, 'Title_en')

    def get_Content(self, obj):
        return get_field_based_on_language(obj, 'Content', self.context, 'Content_en')

    def get_Image(self, obj):
        if obj.Image:
            request = self.context.get('request')
            if request:
                return request.build_absolute_uri(obj.Image.url)
            return obj.Image.url
        return None

class educationSerializer(newsSerializer):
    class Meta:
        model = educations
        fields = ("EducationID", "formatted_text", "Title", "Title_en", "Content", "Content_en", "Image", "TextAlt", "CreateAt")

class logoSerializer(serializers.ModelSerializer):
    class Meta:
        model = logo
        fields = ("LogoID", "Image", "TextAlt")

class missionValuesSerializer(serializers.ModelSerializer):
    Title_mission = serializers.SerializerMethodField()
    Content_mission = serializers.SerializerMethodField()
    Title_objetive = serializers.SerializerMethodField()
    Content_objetive = serializers.SerializerMethodField()
    Title_motivation = serializers.SerializerMethodField()
    Content_motivation = serializers.SerializerMethodField()

    def get_Title_mission(self, obj):
        return get_field_based_on_language(obj, 'Title_mission', self.context, 'Title_mission_en')

    def get_Content_mission(self, obj):
        return get_field_based_on_language(obj, 'Content_mission', self.context, 'Content_mission_en')

    def get_Title_objetive(self, obj):
        return get_field_based_on_language(obj, 'Title_objetive', self.context, 'Title_objetive_en')

    def get_Content_objetive(self, obj):
        return get_field_based_on_language(obj, 'Content_objetive', self.context, 'Content_objetive_en')

    def get_Title_motivation(self, obj):
        return get_field_based_on_language(obj, 'Title_motivation', self.context, 'Title_motivation_en')

    def get_Content_motivation(self, obj):
        return get_field_based_on_language(obj, 'Content_motivation', self.context, 'Content_motivation_en')

    class Meta:
        model = missionValues
        fields = (
            "missionValuesID", "Title_mission", "Title_mission_en", "Content_mission", "Content_mission_en",
            "Content_objetive", "Content_objetive_en", "Title_objetive", "Title_objetive_en", "Title_motivation",
            "Title_motivation_en", "Content_motivation", "Content_motivation_en"
        )

class whoWeAreSerializer(serializers.ModelSerializer):
    formatted_text = serializers.SerializerMethodField()
    Title = serializers.SerializerMethodField()
    Content = serializers.SerializerMethodField()

    class Meta:
        model = whoWeAre
        fields = ("whoWeAreID", "formatted_text", "Title", "Content", "Title_en", "Content_en")

    def get_formatted_text(self, obj):
        language = self.context.get('language', 'es')
        text = obj.Content_en if language == 'en' else obj.Content
        return linebreaks(text)


    def get_Title(self, obj):
        return get_field_based_on_language(obj, 'Title', self.context, 'Title_en')

    def get_Content(self, obj):
        return get_field_based_on_language(obj, 'Content', self.context, 'Content_en')

class bannerSerializer(serializers.ModelSerializer):
    url_name = serializers.CharField(source='Url.Url', read_only=True)
    url_id = serializers.IntegerField(source='Url.NavId', read_only=True)

    class Meta:
        model = banner
        fields = ('BannerID', 'Image', 'url_name', 'url_id', 'TextAlt')

    def get_image_url(self, obj):
        # Generar una URL absoluta usando BASE_URL
        request = self.context.get('request')
        if obj.Image:  # Asegúrate de que la imagen existe
            if request:
                return request.build_absolute_uri(obj.banner.Image)
            else:
                return f"{settings.BASE_URL}{obj.banner.Image}"
        return None



class eventSerializer(serializers.ModelSerializer):
    Event = serializers.SerializerMethodField()
    Address = serializers.SerializerMethodField()

    def get_Event(self, obj):
        return get_field_based_on_language(obj, 'Event', self.context, 'Event_en')

    def get_Address(self, obj):
        return get_field_based_on_language(obj, 'Address', self.context, 'Address_en')

    class Meta:
        model = event
        fields = ('EventID', 'Event', 'Address', 'Event_en', 'Address_en', 'EventDate', 'Image', 'TextAlt')

class causeSerializer(serializers.ModelSerializer):
    Cause = serializers.SerializerMethodField()
    Title = serializers.SerializerMethodField()
    Description = serializers.SerializerMethodField()

    def get_Cause(self, obj):
        return get_field_based_on_language(obj, 'Cause', self.context, 'Cause_en')

    def get_Title(self, obj):
        return get_field_based_on_language(obj, 'Title', self.context, 'Title_en')

    def get_Description(self, obj):
        return get_field_based_on_language(obj, 'Description', self.context, 'Description_en')

    class Meta:
        model = causes
        fields = ('CauseID', 'Cause', 'Cause_en', 'Image', 'Title', 'Description', 'Title_en', 'Description_en', 'TextAlt')



class collaboratorSerializer(serializers.ModelSerializer):
    image_url = serializers.SerializerMethodField()

    class Meta:
        model = collaborator
        fields = ('CollaboratorID', 'Name', 'image_url', 'Description', 'TextAlt')  # Eliminar el campo "Image"

    def get_image_url(self, obj):
        # Generar una URL absoluta para la imagen
        request = self.context.get('request')
        if obj.Image:  # Asegúrate de que la imagen existe
            if request:
                return request.build_absolute_uri(obj.Image.url)
            return f"{settings.BASE_URL}{obj.Image.url}"  # Respaldo con BASE_URL
        return None



class videoSerializer(serializers.ModelSerializer):
    class Meta:
        model = video
        fields = ('VideoID', 'Title', 'VideoFile')

class whatOurDonorsSaySerializer(serializers.ModelSerializer):
    formatted_comment1 = serializers.SerializerMethodField()
    formatted_comment2 = serializers.SerializerMethodField()
    formatted_comment3 = serializers.SerializerMethodField()

    class Meta:
        model = whatOurDonorsSay
        fields = ('DonorsSayID', 'Comment1', 'Comment2', 'Comment3', 'Comment1_en', 'Comment2_en', 'Comment3_en', 'Image', 'TextAlt', 
                  'formatted_comment1', 'formatted_comment2', 'formatted_comment3')

    def get_formatted_comment1(self, obj):
        return linebreaks(get_field_based_on_language(obj, 'Comment1', self.context, 'Comment1_en'))

    def get_formatted_comment2(self, obj):
        return linebreaks(get_field_based_on_language(obj, 'Comment2', self.context, 'Comment2_en'))

    def get_formatted_comment3(self, obj):
        return linebreaks(get_field_based_on_language(obj, 'Comment3', self.context, 'Comment3_en'))

class contactSerializer(serializers.ModelSerializer):
    class Meta:
        model = contact
        fields = ('ContactID', 'Phone', 'Email', 'LinkFacebook', 'LinkInstagram', 'LinkTweeter')

class accountBankSerializer(serializers.ModelSerializer):
    currency_name = serializers.CharField(source='Currency.Currency', read_only=True)
    currency_ID = serializers.IntegerField(source='Currency.CurrencyID', read_only=True)

    class Meta:
        model = accountBank
        fields = ('AccountID', 'Bank', 'Account', 'Currency', 'currency_name', 'currency_ID')
