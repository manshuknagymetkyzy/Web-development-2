from django.db import models

# Create your models here.
class Product(models.Model):
    name = models.CharField(max_length=300)
    price = models.FloatField(default=0)
    description = models.TextField(default='')

    def to_json(self):
        return {
            'id': self.id,
            'name': self.name,
            'price': self.price,
            'description': self.description
        }