from rest_framework import status
from rest_framework.response import Response
from rest_framework.permissions import IsAuthenticated, AllowAny
from rest_framework.decorators import api_view, permission_classes
from .models import Reply
from .serializers import ReplySerializer
from django.shortcuts import get_object_or_404

# Create your views here.
@api_view(['GET'])
@permission_classes([AllowAny])
def get_all_replies(request):
    replies = Reply.objects.all()
    serializer = ReplySerializer(replies, many=True)
    return Response(serializer.data)


@api_view(['GET', 'POST'])
@permission_classes([IsAuthenticated])
def action_replies(request, pk):

    if request.method == 'GET':
        replies = Reply.objects.filter(comment=pk)
        serializer = ReplySerializer(replies, many=True)
        return Response(serializer.data)
    elif request.method == 'POST':
        serializer = ReplySerializer(data=request.data)
        if serializer.is_valid():
            serializer.save(user=request.user, comment=pk)
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    
