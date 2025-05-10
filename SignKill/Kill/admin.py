# admin.py

from django.contrib import admin
#from .models import BlogPost
from .models import ContactEnquiry

admin.site.register(ContactEnquiry)

#@admin.register(BlogPost)
#class BlogPostAdmin(admin.ModelAdmin):
#    list_display = ('title', 'content')
