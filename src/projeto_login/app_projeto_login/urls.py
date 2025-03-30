from django.urls import path
from . import views

urlpatterns = [
    path('', views.login_view, name='login'),
    path('register/', views.register_view, name='register'),
    path('menu/', views.menu_view, name='menu'),
    path('senhas/', views.listar_senhas, name='listar_senhas'),

]
