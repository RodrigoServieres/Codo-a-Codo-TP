from django.shortcuts import render
from django.shortcuts import render
from django.urls import reverse_lazy
from django.views import View

from django.views.generic.list import ListView
from django.views.generic.edit import DeleteView, UpdateView, CreateView
from django.views.generic.detail import DetailView
from .models import Casio
# Create your views here.
class CasioBaseView(View):
    template_name = 'casio.html'
    model = Casio
    fields = '__all__'
    success_url = reverse_lazy('casio:all')
class CasioListView(CasioBaseView, ListView):
    """"""
class CasioDetailView(CasioBaseView, DetailView):
    template_name = "casio_detail.html"
class CasioCreateView(CasioBaseView, CreateView):
    template_name = "casio_create.html"
    extra_context = {
        "tipo": "Crear"
    }
class CasioUpdateView(CasioBaseView, UpdateView):
    template_name = "casio_create.html"
    extra_context = {
        "tipo": "Actualizar"
    }
class CasioDeleteView(CasioBaseView, DeleteView):
    template_name = "casio_delete.html"
    extra_context = {
        "tipo": "Borrar"
    }