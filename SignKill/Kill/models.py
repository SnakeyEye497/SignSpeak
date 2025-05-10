from django.db import models

# Create your models here.
# models.py

from django.db import models

# class BlogPost(models.Model):
#     title = models.CharField(max_length=200)
#     content = models.TextField()
#
#     def __str__(self):
#         return self.title

class ContactEnquiry(models.Model):

    Name=models.CharField(max_length=50)
    Email= models.CharField(max_length=50)
    Subject = models.CharField(max_length=50)
    Message = models.TextField()


