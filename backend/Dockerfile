
# Usar una imagen base de Python
FROM python:3.10

# Establecer el directorio de trabajo dentro del contenedor
WORKDIR /app

# Copiar los archivos del proyecto al contenedor
COPY . /app

# Instalar las dependencias necesarias
RUN pip install -r requirements.txt

# Recolectar archivos estáticos
#RUN python manage.py collectstatic --noinput

# Exponer el puerto 8000 donde se ejecutará la aplicación
EXPOSE 8000

# Comando para iniciar Gunicorn cuando el contenedor se inicie
CMD ["gunicorn", "futuroCiertoApi.wsgi:application", "--bind", "0.0.0.0:8000", "--workers=3", "--timeout=120"]
