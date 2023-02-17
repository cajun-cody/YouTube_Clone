from rest_framework import status
from rest_framework.response import Response
from rest_framework.permissions import IsAuthenticated, AllowAny
from rest_framework.decorators import api_view, permission_classes
from .models import Comment
from .serializers import CommentSerializer
from django.shortcuts import get_object_or_404



# Create your views here.
@api_view(['GET'])
@permission_classes([AllowAny])
def get_comments_by_video_id(request, video_id): #added video_id param to match with a query below.
    if request.method == 'GET':
        comments = Comment.objects.filter(video_id= video_id) #query to filer video_id's that match
        serializer = CommentSerializer(comments, many=True)
        return Response(serializer.data, status=status.HTTP_200_OK)

@api_view(['POST'])
@permission_classes([IsAuthenticated])
def post_comment(request):
    serializer = CommentSerializer(data=request.data)
    if serializer.is_valid():
        serializer.save(user=request.user)
        return Response(serializer.data, status=status.HTTP_201_CREATED)
    return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

@api_view(['PUT'])
@permission_classes([IsAuthenticated])
def update_comment(request, pk):
    comment = get_object_or_404(Comment, pk=pk)
    serializer = CommentSerializer(comment, data=request.data, partial=True)
    serializer.is_valid(raise_exception=True)
    serializer.save()
    return Response(serializer.data, status=status.HTTP_200_OK)



# @api_view(['GET'])
# @permission_classes([IsAuthenticated])
# def action_replies(request, pk):
#     if request.method == 'GET':
#         comment = Comment.objects.get(pk=pk)
#         serializer = CommentSerializer(comment)
#         #replies = Reply.objects.filter(pk=pk)
#         #serializer = ReplySerializer(replies, many=True)
#         return Response(serializer.data)