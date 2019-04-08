from django.shortcuts import render
from django.http import HttpResponse, JsonResponse
from api.models import TaskList
from api.models import Task


def TaskList_list(request):
    tasklists = TaskList.objects.all()
    json_tasklists = [tl.to_json() for tl in taskLists]
    return JsonResponse(json_tasklists, safe=False)

def TaskList_inf(request):
        tasklist_item = TaskList.objects.get(id=pk)
        return JsonResponse(tasklist_item.to_json())

def TaskList_task(request):
    tasklist_item = TaskList.objects.get(id=pk)
    return JsonResponse(tasklist_item.to_json())

    tasks = tasklists.tasks_set.all()
    json_tasks = [ts.to_json() for ts in tasks]
    return JsonResponse(json_tasks, safe=False)