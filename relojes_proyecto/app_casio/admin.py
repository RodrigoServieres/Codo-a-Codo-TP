from django.contrib import admin

# Register your models here.
@admin.register(Casio)
class CasioAdmin(admin.ModelAdmin):
    APPS = [
        "app_casio"
    ]
    INSTALLED_APPS = [
    'django.contrib.admin',
    'django.contrib.auth',
    'django.contrib.contenttypes',
    'django.contrib.sessions',
    'django.contrib.messages',
    'django.contrib.staticfiles',
    ]
    INSTALLED_APPS += APPS
