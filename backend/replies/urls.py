from django.urls import path
from replies import views

urlpatterns = [
    path('',views.get_all_replies),
    path('comment_id/<int:pk>/', views.action_replies),


]

