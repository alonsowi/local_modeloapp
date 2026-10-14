from django.db import models
from persons.models import Person

# Create your models here.

class Employee(Person):

    class Meta:
        verbose_name = 'Funcionario'
        verbose_name_plural = 'Funcionarios'
        ordering = ['id']
