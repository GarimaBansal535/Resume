from django.contrib import admin
from .models import Resume

# Register your models here.
@admin.register(Resume)
class ResumeModelAdmin(admin.ModelAdmin):
    list_display=['id','name','dob','gender','email','mobileno','locality','states','city',
                  'job_city','prfl_image','file_image','pin']