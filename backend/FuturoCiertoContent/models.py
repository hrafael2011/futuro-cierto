from django.db import models
from ckeditor.fields import RichTextField
from simple_history.models import HistoricalRecords
from helper.image_processing import processImage , validateVideo
from helper.translation_helper import TranslationHelper




# Create your models here.




class navigation(models.Model):
    NavId = models.AutoField(primary_key=True,  verbose_name='ID')
    PageName = models.CharField(max_length=255, blank=True, verbose_name='Pagína')
    Url = models.CharField(max_length=255, blank=True)
    PageName_en = models.CharField(max_length=255, blank=True, verbose_name='page')
    CreateAt = models.DateTimeField(auto_now_add=True, verbose_name='Fecha Creación')
    UpdateAt = models.DateTimeField(auto_now=True, null=True, verbose_name='Fecha Acualización')
    Historical = HistoricalRecords()
    is_active = models.BooleanField(default=True, verbose_name='Activo')
    is_hidden = models.BooleanField(default=False)

    def __str__(self):
        return  self.Url
    
    def save(self, *args, **kwargs):

        # Traslates field PageName in PageName_en
        if self.PageName and not self.PageName_en:
            translator = TranslationHelper()
            self.PageName_en = translator.translate(self.PageName)
        super().save(*args, **kwargs)

    
    def delete(self, *args, **kwargs):
          self.is_hidden = True
          self.is_active = False
          self.save()

   
    class Meta:
        verbose_name = 'Navegación'
        verbose_name_plural = 'Navegacion'
        ordering = ['NavId']
        

class news(models.Model):
     NewID = models.AutoField(primary_key=True)
     Title = models.CharField(max_length=255, null=False, verbose_name='Titulo')
     Content =  RichTextField( null=False, verbose_name='Contenido')
     Title_en = models.CharField(max_length=255, blank=True, null=True, verbose_name='Title')
     Content_en =  RichTextField( null=True, blank=True,verbose_name='Content')
     Image = models.ImageField(null=True, upload_to= "articles/", verbose_name='Imagen' )
     TextAlt = models.CharField(max_length=255, null=False, verbose_name='Texto Alternativo')
     Description = models.CharField(max_length=255, null=True, verbose_name='Descripción')
     CreateAt = models.DateTimeField(auto_now_add=True)
     UpdateAt = models.DateTimeField(auto_now=True, null=True)
     Historical = HistoricalRecords()
     is_active = models.BooleanField(default=True, verbose_name='Activo')
     is_hidden = models.BooleanField(default=False)  


     

     def delete(self, *args, **kwargs):
          self.is_hidden = True
          self.is_active = False
          self.save()

     def save(self, *args, **kwargs):

        translator = TranslationHelper()

        if self.Title and not self.Title_en:
             self.Title_en = translator.translate(self.Title)

        if self.Content and not self.Content_en:
             self.Content_en = translator.translate(self.Content)
        

        super(news, self).save(*args, **kwargs)

        #Convert images               
        new_image_path = processImage(self.Image.path, size=(300, 200), dir='articles/')
        self.Image = new_image_path
        super(news, self).save(*args, **kwargs)

     class Meta:
           verbose_name = 'Noticias'
           verbose_name_plural = 'Noticias'




    
class educations(models.Model):
     EducationID = models.AutoField(primary_key=True)
     Title = models.CharField(max_length=255, null=False, verbose_name='Titulo')
     Content =RichTextField( null=False, verbose_name='Contenido')
     Title_en = models.CharField(max_length=255, blank=True, verbose_name='title')
     Content_en =RichTextField( blank=True, verbose_name='content')
     Image = models.ImageField(null=True, upload_to= "articles_educations", verbose_name='Imagen' )
     TextAlt = models.CharField(max_length=255, null=False, verbose_name='Texto Alternativo')
     Description = models.CharField(max_length=255, null=True, verbose_name='Descripción')
     CreateAt = models.DateTimeField(auto_now_add=True)
     UpdateAt = models.DateTimeField(auto_now=True, null=True)
     Historical = HistoricalRecords()
     is_active = models.BooleanField(default=True, verbose_name='Activo')
     is_hidden = models.BooleanField(default=False)

     def delete(self, *args, **kwargs):
          self.is_hidden = True
          self.is_active = False
          self.save()

     def save(self, *args, **kwargs):
        translator = TranslationHelper()

        if self.Title and not self.Title_en:
             self.Title_en = translator.translate(self.Title)

        if self.Content and not self.Content_en:
             self.Content_en = translator.translate(self.Content)

        super(educations, self).save(*args, **kwargs)

        #Convert images                 
        new_image_path = processImage(self.Image.path, size=(300, 200), dir='articles_educations/')
        self.Image = new_image_path
        super(educations, self).save(*args, **kwargs)

     class Meta:
           verbose_name = 'Educación'
           verbose_name_plural = 'Educación'
     

class logo(models.Model):
     LogoID = models.AutoField(primary_key=True)
     Image = models.ImageField(null=True, upload_to= "articles_logo", verbose_name='Logo' )
     TextAlt = models.CharField(max_length=255, null=False, verbose_name='Texto Alternativo')
     Description = models.CharField(max_length=255, null=True, verbose_name='Descripción')
     CreateAt = models.DateTimeField(auto_now_add=True)
     UpdateAt = models.DateTimeField(auto_now=True, null=True)
     Historical = HistoricalRecords()
     is_active = models.BooleanField(default=True, verbose_name='Activo')
     is_hidden = models.BooleanField(default=False)

     def delete(self, *args, **kwargs):
          self.is_hidden = True
          self.is_active = False
          self.save()

     def save(self, *args, **kwargs):
  
        if self.is_active:
          
            #enable the others fields and active items
            logo.objects.exclude(LogoID=self.LogoID).filter(is_active=True).update(is_active=False)
        super(logo, self).save(*args, **kwargs)

        #convertir imagenes               
        new_image_path = processImage(self.Image.path, size=(294, 45), dir='articles_logo/')
        self.Image = new_image_path
        super(logo, self).save(*args, **kwargs)

     class Meta:
           verbose_name = 'Logo'
           verbose_name_plural = 'Logo'

       
class missionValues(models.Model):
     missionValuesID = models.AutoField(primary_key=True)
     Title_mission = models.CharField(max_length=255, null=False, verbose_name='Titulo Misión')
     Content_mission = models.TextField( null=False, verbose_name='Contenido Misión')
     Title_mission_en = models.CharField(max_length=255, blank=True, verbose_name='Mission Title')
     Content_mission_en = models.TextField( blank=True, verbose_name='Mission Content')
     Title_objetive = models.CharField(max_length=255, null=False, verbose_name='Titulo Objetivo')
     Content_objetive = models.TextField( null=False, verbose_name='Contenido Objetivo')
     Title_objetive_en = models.CharField(max_length=255, blank=True, verbose_name='Objetive Title')
     Content_objetive_en = models.TextField( blank=True, verbose_name='Objetive Content')
     Title_motivation = models.CharField(max_length=255, null=True, verbose_name='Titulo Motivación')
     Content_motivation = models.TextField( null=True, verbose_name='Contenido Motivación')
     Title_motivation_en = models.CharField(max_length=255, blank=True, verbose_name='Motivation Title')
     Content_motivation_en = models.TextField( blank=True, verbose_name='Content-Motivation-en')
     CreateAt = models.DateTimeField(auto_now_add=True)
     UpdateAt = models.DateTimeField(auto_now=True, null=True)
     Historical = HistoricalRecords()
     is_active = models.BooleanField(default=True, verbose_name='Activo')
     is_hidden = models.BooleanField(default=False)


     def delete(self, *args, **kwargs):
          self.is_hidden = True
          self.is_active = False
          self.save()

     def save(self, *args, **kwargs):
        translator = TranslationHelper()

        if self.Title_mission and not self.Title_mission_en:
             self.Title_mission_en = translator.translate(self.Title_mission)

        if self.Content_mission and not self.Content_mission_en:
             self.Content_mission_en = translator.translate(self.Content_mission)

        if self.Title_objetive and not self.Title_objetive_en:
             self.Title_objetive_en = translator.translate(self.Title_objetive)

        if self.Content_objetive and not self.Content_objetive_en:
             self.Content_objetive_en = translator.translate(self.Content_objetive)
        
        if self.Title_motivation and not self.Title_motivation_en:
             self.Title_motivation_en = translator.translate(self.Title_motivation)

        if self.Content_motivation and not self.Content_motivation_en:
             self.Content_motivation_en = translator.translate(self.Content_motivation)
  
        if self.is_active:
            # Desactivar todos los otros elementos activos
            missionValues.objects.exclude(missionValuesID=self.missionValuesID).filter(is_active=True).update(is_active=False)
        super(missionValues, self).save(*args, **kwargs)

       
     class Meta:
           verbose_name = 'Misión y Valores'
           verbose_name_plural = 'Misión y Valores'

     
     
class whoWeAre(models.Model):
     whoWeAreID = models.AutoField(primary_key=True)
     Title = models.CharField(max_length=255, null=False, verbose_name='Titulo')
     Content = RichTextField( null=False, verbose_name='Contenido')
     Title_en = models.CharField(max_length=255, blank=True, verbose_name='Title')
     Content_en = models.TextField( blank=True, verbose_name='Content')
     CreateAt = models.DateTimeField(auto_now_add=True)
     UpdateAt = models.DateTimeField(auto_now=True, null=True)
     Historical = HistoricalRecords()
     is_active = models.BooleanField(default=True, verbose_name='Activo')
     is_hidden = models.BooleanField(default=False)

     def delete(self, *args, **kwargs):
          self.is_hidden = True
          self.is_active = False
          self.save()

     def save(self, *args, **kwargs):
        translator = TranslationHelper()

        if self.Content and not self.Content_en:
             self.Content_en = translator.translate(self.Content)

        if self.Title and not self.Title_en:
             self.Title_en = translator.translate(self.Title)

        if self.is_active:
             #disable other active items
            whoWeAre.objects.exclude(whoWeAreID=self.whoWeAreID).filter(is_active=True).update(is_active=False)
        super(whoWeAre, self).save(*args, **kwargs)

     class Meta:
          verbose_name = 'Quiénes Somos'
          verbose_name_plural = 'Quiénes Somos'    
     

class banner(models.Model):
      BannerID = models.AutoField(primary_key=True)
      Image = models.ImageField(null=True, blank=True, upload_to='banner/', verbose_name='Imagen Banner')
      TextAlt = models.CharField(max_length=255, null=True, blank=True, verbose_name='Texto Alternativo')
      Description  = models.CharField(max_length=255, blank=True, null=True, verbose_name='Descripción')
      UpdateAt = models.DateTimeField(auto_now=True, null=True)
      Url = models.ForeignKey(navigation, blank=True, null=True, on_delete=models.CASCADE,  limit_choices_to={'is_active': True}, verbose_name='URL')
      Historical = HistoricalRecords()
      is_active = models.BooleanField(default=True, verbose_name='Activo')
      is_hidden = models.BooleanField(default=False)

      def delete(self, *args, **kwargs):
          self.is_hidden = True
          self.is_active = False     
          
          self.save()

      def save(self, *args, **kwargs):
  
    
        
          super(banner, self).save(*args, **kwargs)
        
        

          #convert images      
          new_image_path = processImage(self.Image.path, size=(1920, 926), dir='banner/')
          self.Image = new_image_path
          super(banner, self).save(*args, **kwargs)

      class Meta:
          verbose_name = 'Banner'
          verbose_name_plural = 'Banner'
          
      

class event(models.Model):
       EventID = models.AutoField(primary_key=True)
       Event = models.CharField(max_length=255, blank=False, null=False,  verbose_name='Titulo del evento')
       Address = models.CharField(max_length=255, blank=True, null=True, verbose_name='Direccion del evento')
       Event_en = models.CharField(max_length=255, blank=True,  verbose_name='Event Title')
       Address_en = models.CharField(max_length=255, blank=True, verbose_name='Event Address')
       EventDate = models.DateTimeField()
       Image = models.ImageField(null=True, blank=True, upload_to='event/', verbose_name='Imagen Evento')
       TextAlt = models.CharField(max_length=255, null=True, blank=True, verbose_name='Texto Alternativo')
       Historical = HistoricalRecords()
       is_active = models.BooleanField(default=True, verbose_name='Activo')
       is_hidden = models.BooleanField(default=False)

       def delete(self, *args, **kwargs):
          self.is_hidden = True
          self.is_active = False
          self.save()
      
       def save(self, *args, **kwargs):

        translator = TranslationHelper()

        if self.Event and not self.Event_en:
             self.Event_en = translator.translate(self.Event)

        if self.Address and not self.Address_en:
             self.Address_en = translator.translate(self.Address)


        if self.is_active:
          
            event.objects.exclude(EventID=self.EventID).filter(is_active=True).update(is_active=False)
        super(event, self).save(*args, **kwargs)

      
       
        new_image_path = processImage(self.Image.path, size=(200, 190), dir='event/')

       
        self.Image = new_image_path

       
        super(event, self).save(*args, **kwargs)

       class Meta:
          verbose_name = 'Evento'
          verbose_name_plural = 'Evento'

    
class causes(models.Model):
    CauseID = models.AutoField(primary_key=True)
    Cause = models.CharField(max_length=255, null=False, blank=False, verbose_name='Causa')
    Image = models.ImageField(null=False, blank=False, upload_to='cause/', verbose_name='Imagen Causa')
    Title = models.CharField(max_length=255, null=False, blank=False, verbose_name='Titulo')
    Description = models.CharField(max_length=255, null=False, blank=False, verbose_name='Descripción')
    Cause_en = models.CharField(max_length=255, blank=True, verbose_name='Cause')
    Title_en = models.CharField(max_length=255,  blank=True, verbose_name='Title')
    Description_en = models.CharField(max_length=255,  blank=True, verbose_name='Description')
    TextAlt = models.CharField(max_length=255, null=True, blank=True, verbose_name='Texto Alternativo')
    Historical = HistoricalRecords()
    is_active = models.BooleanField(default=True, verbose_name='Activo')
    is_hidden = models.BooleanField(default=False)

    def delete(self, *args, **kwargs):
        self.is_hidden = True
        self.is_active = True
        self.save()
    
    def save(self, *args, **kwargs):
     translator = TranslationHelper()

     if self.Cause and not self.Cause_en:
             self.Cause_en = translator.translate(self.Cause)

     if self.Title and not self.Title_en:
             self.Title_en = translator.translate(self.Title)

     if self.Description and not self.Description_en:
             self.Description_en = translator.translate(self.Description)
        
     super(causes, self).save(*args, **kwargs)

      
      
     new_image_path = processImage(self.Image.path, size=(356, 200), dir='cause/')

     self.Image = new_image_path

       
     super(causes, self).save(*args, **kwargs)

    class Meta:
          verbose_name = 'Causa'
          verbose_name_plural = 'Causa'



class collaborator(models.Model):
    CollaboratorID = models.AutoField(primary_key=True)
    Name = models.CharField(max_length=255, null=False, blank=False, verbose_name='Nombre')
    Image = models.ImageField(null=False, blank=False, upload_to='collobator/', verbose_name='Imagen')
    Description = models.CharField(max_length=255, null=False, blank=False, verbose_name='Descripción')
    TextAlt = models.CharField(max_length=255, null=True, blank=True, verbose_name='Texto Alternativo')
    Historical = HistoricalRecords()
    is_active = models.BooleanField(default=True, verbose_name='Activo')
    is_hidden = models.BooleanField(default=False)

    def delete(self, *args, **kwargs):
        self.is_hidden = True
        self.is_active = True
        self.save()
    
    def save(self, *args, **kwargs):
    
     
     super(collaborator, self).save(*args, **kwargs)

      
      
     new_image_path = processImage(self.Image.path, size=(135, 135), dir='collobator/')

       
     self.Image = new_image_path

       
     super(collaborator, self).save(*args, **kwargs)

    class Meta:
          verbose_name = 'Colaborador'
          verbose_name_plural = 'Colaborador'


class video(models.Model):
    VideoID = models.AutoField(primary_key=True)
    Title = models.CharField(max_length=255)
    VideoFile = models.FileField(upload_to='videos/', validators=[validateVideo])
    Historical = HistoricalRecords()
    is_active = models.BooleanField(default=True, verbose_name='Activo')
    is_hidden = models.BooleanField(default=False)


   

    def delete(self, *args, **kwargs):
          self.is_hidden = True
          self.is_active = False
          self.save()
      
    def save(self, *args, **kwargs):

        if self.is_active:
       
            video.objects.exclude(VideoID=self.VideoID).filter(is_active=True).update(is_active=False)
        super(video, self).save(*args, **kwargs)



class whatOurDonorsSay(models.Model):
       DonorsSayID = models.AutoField(primary_key=True)
       Title = models.CharField(max_length=255, null=True, blank=True, verbose_name='Titulo')
       Comment1 = RichTextField(max_length=450 , null=False,  default='', verbose_name='Comentario Donante 1')
       Comment2 = RichTextField(max_length=450 , null=False, default='',  verbose_name='Comentario Donante 2')
       Comment3 = RichTextField(max_length=450, null=False,   default='', verbose_name='Comentario Donante 3')
       Comment1_en = RichTextField(max_length=450 , blank=True, verbose_name='Donator Comment 1')
       Comment2_en = RichTextField(max_length=450 ,blank=True,  verbose_name='Donator Comment 2')
       Comment3_en = RichTextField(max_length=450, blank=True,  verbose_name='Donator Comment 3')
       Image = models.ImageField(null=True, blank=True, upload_to='event/', verbose_name='Imagen ')
       TextAlt = models.CharField(max_length=255, null=True, blank=True, verbose_name='Texto Alternativo')
       Historical = HistoricalRecords()
       is_active = models.BooleanField(default=True, verbose_name='Activo')
       is_hidden = models.BooleanField(default=False)

       def delete(self, *args, **kwargs):
          self.is_hidden = True
          self.is_active = False
          self.save()
      
       def save(self, *args, **kwargs):

        translator = TranslationHelper()

        if self.Comment1 and not self.Comment1_en:
             self.Comment1_en = translator.translate(self.Comment1)

        if self.Comment2 and not self.Comment2_en:
             self.Comment2_en = translator.translate(self.Comment2)

        if self.Comment3 and not self.Comment3_en:
             self.Comment3_en = translator.translate(self.Comment3)

        if self.is_active:
            # Desactivar todos los otros elementos activos
            whatOurDonorsSay.objects.exclude( DonorsSayID =self. DonorsSayID ).filter(is_active=True).update(is_active=False)
        super(whatOurDonorsSay, self).save(*args, **kwargs)

      
   
        new_image_path = processImage(self.Image.path, size=(556, 462), dir='event/')

       
        self.Image = new_image_path

       
        super(whatOurDonorsSay, self).save(*args, **kwargs)

       class Meta:
          verbose_name = 'Comentarios Donantes'
          verbose_name_plural = 'Comentarios Donantes'


class contact(models.Model):

    #validacion phone
    


    ContactID =models.AutoField(primary_key=True)
    Phone = models.CharField(max_length=255, null=False, verbose_name='Telefono')
    Email = models.EmailField(max_length=255, null=False,blank=False)
    LinkFacebook = models.CharField(max_length=255, null=False,blank=False)
    LinkInstagram = models.CharField(max_length=255, null=False,blank=False)
    LinkTweeter = models.CharField(max_length=255, null=False,blank=False)
    Historical = HistoricalRecords()
    is_active = models.BooleanField(default=True, verbose_name='Activo')
    is_hidden = models.BooleanField(default=False)

    class Meta:
        verbose_name = 'Contacto'
        verbose_name_plural = 'Contacto'

    def delete(self, *args, **kwargs):
          self.is_hidden = True
          self.is_active = False
          self.save()
      
    def save(self, *args, **kwargs):

        if self.is_active:
        
            contact.objects.exclude(ContactID=self.ContactID).filter(is_active=True).update(is_active=False)
        super(contact, self).save(*args, **kwargs)


class currency(models.Model):
    CurrencyID = models.AutoField(primary_key=True)
    Currency = models.CharField(max_length=100 , null=False, blank=False, verbose_name='Moneda')
    Historical = HistoricalRecords()
    is_active = models.BooleanField(default=True, verbose_name='Activo')
    is_hidden = models.BooleanField(default=False)

    class Meta:
        verbose_name = 'Moneda'
        verbose_name_plural = 'Moneda'

    def delete(self, *args, **kwargs):
          self.is_hidden = True
          self.is_active = False
          self.save()

    def __str__(self):
        return  self.Currency
      

class accountBank(models.Model):

    AccountID = models.AutoField(primary_key=True)
    Bank = models.CharField(max_length=255 , null=False, blank=False, verbose_name='Banco' )
    Account = models.CharField(max_length=255, null=True, blank=False, verbose_name='Cuenta' )
    Currency = models.ForeignKey(currency, blank=True, null=True, on_delete=models.CASCADE,  limit_choices_to={'is_active': True}, verbose_name='Moneda')
    Historical = HistoricalRecords()
    is_active = models.BooleanField(default=True, verbose_name='Activo')
    is_hidden = models.BooleanField(default=False)

    class Meta:
        verbose_name = 'Cuenta de Banco'
        verbose_name_plural = 'Cuenta de Banco'

    def delete(self, *args, **kwargs):
          self.is_hidden = True
          self.is_active = False
          self.save()








    
          
          

     
        
    
        
        

              



        
        


        
