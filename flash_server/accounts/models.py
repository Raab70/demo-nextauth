# https://learndjango.com/tutorials/django-custom-user-model
from django.contrib.auth.models import AbstractUser


class FlashUser(AbstractUser):
    pass
    # add additional fields in here like favorite cards or purchased packs

    def __str__(self):
        return self.username
