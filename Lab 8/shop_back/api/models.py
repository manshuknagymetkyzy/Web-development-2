from unicodedata import category
from django.db import models

# Create your models here.
class Product(models.Model): 
    name = models.CharField(max_length=300)
    price = models.FloatField(default=0)
    description = models.TextField(default='')
    count = models.IntegerField(default=0)
    isActive = models.BooleanField(default=False)
    category_id = models.IntegerField(default=0)
    def toJson(self):
        return {
            'id': self.id,
            'name': self.name,
            'price': self.price,
            'description': self.description,
            'count': self.count,
            'isActive': self.isActive,
            'category_id': self.category_id
        }

class Category(models.Model):
    name = models.CharField(max_length=300)
    def toJson(self):
        return {
            'id': self.id,
            'name': self.name
        }