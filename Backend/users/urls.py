from django.urls import path
from . import views

urlpatterns = [
    path('get-csrf-token/', views.get_csrf_token),
    path('protected/', views.my_protected_view, name = 'protected'),
    path('signup/', views.signup, name='signup'),
]