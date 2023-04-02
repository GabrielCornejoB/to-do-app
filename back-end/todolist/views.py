from rest_framework import viewsets
from todolist.models import Task
from django.contrib.auth.models import User
from rest_framework import permissions
from rest_framework.response import Response
from todolist.permissions import isOwner
from todolist.serializers import TaskSerializer, UserSerializer

class UserViewSet(viewsets.ReadOnlyModelViewSet):
    queryset = User.objects.all()
    serializer_class = UserSerializer
    permission_classes = [permissions.IsAuthenticated]

class TaskViewSet(viewsets.ModelViewSet):
    queryset = Task.objects.all()
    serializer_class = TaskSerializer
    permission_classes = [permissions.IsAuthenticated, isOwner]

    def perform_create(self, serializer):
        serializer.save(owner=self.request.user)
    def get_queryset(self):
        user = self.request.user
        return Task.objects.filter(owner=user)
