
from django.contrib import admin
from simple_history.admin import SimpleHistoryAdmin

from.models import (navigation, 
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



# Soft delete mixin to hide data that is not being used, but still keep it in the database
class SoftDeleteMixin:
    def get_queryset(self, request):
            queryset = super().get_queryset(request)
            return queryset.filter(is_hidden = False)


# Register your models here.
@admin.register(navigation)
class NavigationAdmin(SoftDeleteMixin,SimpleHistoryAdmin): 
    list_display  = ('PageName','PageName_en','Url','is_active')
    list_filter = ('is_active',)
    search_fields = ('PageName',)
    exclude = ('is_hidden',)
  
   



@admin.register(news)
class NewsAdmin(SoftDeleteMixin,SimpleHistoryAdmin):

    list_display  = ('Title','is_active')
    list_filter = ('is_active',)
    search_fields = ('Title',)
    exclude = ('is_hidden',)

    
@admin.register(educations)
class EducationAdmin(SoftDeleteMixin, SimpleHistoryAdmin):
    list_display  = ('Title','is_active')
    list_filter = ('is_active',)
    search_fields = ('Title',)
    exclude = ('is_hidden',)
   

@admin.register(logo)
class logoAdmin(SoftDeleteMixin, SimpleHistoryAdmin):
    list_display  = ('Description','is_active')
    list_filter = ('is_active',)
    search_fields = ('Description',)
    exclude = ('is_hidden',)

@admin.register(missionValues)
class missionValuesAdmin(SoftDeleteMixin, SimpleHistoryAdmin):
    list_display  = ('Title_mission','is_active')
    list_filter = ('is_active',)
    search_fields = ('Title_mission',)
    exclude = ('is_hidden',)
    
    

@admin.register(whoWeAre)
class whoWeAresAdmin(SoftDeleteMixin,SimpleHistoryAdmin):
    list_display  = ('Title','is_active')
    list_filter = ('is_active',)
    search_fields = ('Title',)
    exclude = ('is_hidden',)

@admin.register(banner)
class bannersAdmin(SoftDeleteMixin,SimpleHistoryAdmin, admin.ModelAdmin):
    list_display  = ('TextAlt','is_active')
    list_filter = ('is_active',)
    search_fields = ('TextAlt',)
    exclude = ('is_hidden',)

    # Hidden button function
    def get_form(self, request, obj=None, **kwargs):
        form = super().get_form(request, obj, **kwargs)

        # Disable add and edity buttons
        if 'Url' in form.base_fields:
            form.base_fields['Url'].widget.can_add_related = False  # Hidden add button
            form.base_fields['Url'].widget.can_change_related = False  #Hidden edit button
        return form

    
@admin.register(event)
class eventAdmin(SoftDeleteMixin,SimpleHistoryAdmin):
    list_display  = ('Event','is_active')
    list_filter = ('is_active',)
    search_fields = ('Event',)
    exclude = ('is_hidden',)


@admin.register(causes)
class causestAdmin(SoftDeleteMixin,SimpleHistoryAdmin):
    list_display  = ('Cause','is_active')
    list_filter = ('is_active',)
    search_fields = ('Cause',)
    exclude = ('is_hidden',)


@admin.register(collaborator)
class collobaratorAdmin(SoftDeleteMixin,SimpleHistoryAdmin):
    list_display  = ('Name','is_active')
    list_filter = ('is_active',)
    search_fields = ('Name',)
    exclude = ('is_hidden',)


@admin.register(video)
class videoAdmin(SoftDeleteMixin,SimpleHistoryAdmin):
    list_display  = ('Title','is_active')
    list_filter = ('is_active',)
    search_fields = ('Title',)
    exclude = ('is_hidden',)


@admin.register(whatOurDonorsSay)
class whatOurDonorsSayAdmin(SoftDeleteMixin,SimpleHistoryAdmin):
    list_display  = ('Title','is_active')
    list_filter = ('is_active',)
    search_fields = ('Title',)
    exclude = ('is_hidden',)

@admin.register(contact)
class contactnAdmin(SoftDeleteMixin,SimpleHistoryAdmin):
    list_display  = ('Email','is_active')
    list_filter = ('is_active',)
    search_fields = ('Email',)
    exclude = ('is_hidden',)

@admin.register(currency)
class currencynAdmin(SoftDeleteMixin,SimpleHistoryAdmin):
    list_display  = ('Currency','is_active')
    list_filter = ('is_active',)
    search_fields = ('Currency',)
    exclude = ('is_hidden',)

@admin.register(accountBank)
class AccountBankAdmin(SoftDeleteMixin,SimpleHistoryAdmin):
    list_display  = ('Bank','is_active')
    list_filter = ('is_active',)
    search_fields = ('Bank',)
    exclude = ('is_hidden',)


   

    
