from django.urls import path
from replies import views

urlpatterns = [
    path('',views.get_all_replies),
    path('comment_id/<int:pk>/', views.action_replies), #Path to get replies by comment
    path('post_reply/<int:pk>/', views.post_reply), #Change pathway with post_reply to get past the comment_id path.

]

