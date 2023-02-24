from django.urls import path
from comments import views

urlpatterns = [
    path('<str:video_id>/', views.get_comments_by_video_id), #url path will take in a string
    path('', views.post_comment), #empty path to create a new comment
    path('comment_id/<int:pk>/', views.update_comment),
    
]