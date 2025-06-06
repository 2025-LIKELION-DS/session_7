from django.urls import path
from .views import *

app_name = 'accounts'
urlpatterns = [
    path('signup/', signup, name='signup'),
    path('login/', login, name='login'),
    path('logout/', logout, name='logout'),
    path('mypost/', mypost, name = "mypost"),
    path('mypage/', mypage, name = "mypage"),
    path('myscrap/', myscrap, name = "myscrap"),
    path('user-info/', user_info, name = "user-info"),
]