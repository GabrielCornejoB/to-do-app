from rest_framework import serializers
from todolist.models import Task
from django.contrib.auth.models import User

class TaskSerializer(serializers.HyperlinkedModelSerializer):
    owner = serializers.ReadOnlyField(source='owner.username')
    
    class Meta:
        model = Task
        fields = ['url', 'id', 'owner', 'title', 'description', 'completed']

class UserSerializer(serializers.HyperlinkedModelSerializer):
    tasks = serializers.HyperlinkedRelatedField(many=True, view_name='tasks-detail', read_only=True)
    class Meta:
        model = User
        fields = ['url', 'id', 'username', 'snippets']
