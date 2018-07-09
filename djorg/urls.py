"""djorg URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/2.0/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.urls import path, include, re_path
from django.conf.urls import url, include
from rest_framework import routers
from notes.api import NoteViewset, PersonalNoteViewset
from rest_framework.authtoken import views
from django.views.generic import TemplateView

router = routers.DefaultRouter()
router.register(r'notes', NoteViewset)
router.register(r'personalnotes', PersonalNoteViewset)

urlpatterns = [
    re_path(r'^api-token-auth/', views.obtain_auth_token),
    path('admin/', admin.site.urls),
    url(r'^api-auth/', include(router.urls)),
    path('bookmarks/', include('bookmarks.urls')),
    re_path('^$', TemplateView.as_view(template_name = 'index.html')),
]
