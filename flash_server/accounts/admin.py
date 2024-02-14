from django.contrib import admin
from django.contrib.auth.admin import UserAdmin
from .models import FlashUser

admin.site.register(FlashUser, UserAdmin)
