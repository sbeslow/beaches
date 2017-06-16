from django.http import HttpResponse
from django.shortcuts import render


def index(request):
    return render(request, 'index.html')


def show_beach(request, beach_name):
    return HttpResponse(beach_name)
