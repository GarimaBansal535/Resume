
from django.contrib import admin
from django.urls import path
from resumeuploader import resume_views


from django.urls import include,re_path

urlpatterns = [
    path('admin/', admin.site.urls),
    re_path(r'^api/resume_submit',resume_views.Resume_Submit),
    re_path(r'^api/resume_list',resume_views.Resume_List),
    re_path(r'^api/name_by_detail',resume_views.Name_by_Detail),
    
]
