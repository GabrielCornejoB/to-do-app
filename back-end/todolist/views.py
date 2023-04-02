from rest_framework import viewsets
from todolist.models import Task
from django.contrib.auth.models import User
from rest_framework import permissions
from rest_framework.response import Response
from todolist.permissions import isOwnerOrReadOnly
from todolist.serializers import TaskSerializer, UserSerializer

class UserViewSet(viewsets.ReadOnlyModelViewSet):
    queryset = User.objects.all()
    serializer_class = UserSerializer

class TaskViewSet(viewsets.ModelViewSet):
    queryset = Task.objects.all()
    serializer_class = TaskSerializer
    permission_classes = [permissions.IsAuthenticatedOrReadOnly, isOwnerOrReadOnly]
