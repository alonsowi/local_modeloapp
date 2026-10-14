from django.db import models
from persons.models import Person

# Create your models here.

class Client(Person):

    class Meta:
        verbose_name = 'Cliente'
        verbose_name_plural = 'Clientes'
        ordering = ['id']
