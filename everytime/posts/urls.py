from django.urls import path
from .views import *
# 미디어 파일 및 정적 경로 연결
from django.conf import settings
from django.conf.urls.static import static

app_name = 'posts'
urlpatterns = [
    path('', main, name = "main"),
    path('category/<slug:slug>/', category, name = "category"),
    path('create/<slug:slug>/', create_post, name = "create"),
    path('update/<int:id>/', update_post, name = "update"),
    path('delete/<int:id>/', delete_post, name = "delete"),
    path('detail/<int:id>/', detail_post, name = "detail"),
    path('create-comment/<int:post_id>/', create_comment, name = "create-comment"),
    path('delete-comment/<int:post_id>/<int:comment_id>', delete_comment, name = "delete-comment"),
    path('add-like/<int:post_id>/', add_like, name = "add-like"),
    path('remove-like/<int:post_id>/', remove_like, name = "remove-like"),
    path('add-scrap/<int:post_id>/', add_scrap, name = "add-scrap"),
    path('remove-scrap/<int:post_id>/', remove_scrap, name = "remove-scrap"),
    path('post/<slug:slug>/', post, name='post')
]+static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)