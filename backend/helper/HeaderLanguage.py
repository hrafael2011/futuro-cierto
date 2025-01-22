

def get_serializer_context(self):
        # Obtiene el idioma del encabezado Accept-Language
        language = self.request.headers.get('Accept-Language', 'es')[:2]
        return {'language': language}