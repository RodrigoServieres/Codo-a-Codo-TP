from django.contrib import admin
from django.urls import path , include


from .views import      CasioListView   \
                    ,   CasioDetailView \
                    ,   CasioCreateView \
                    ,   CasioUpdateView \
                    ,   CasioDeleteView
app_name = "casio"
urlpatterns = [
    path("", CasioListView.as_view(), name="all"),
    path("create/", CasioCreateView.as_view(), name="create"),
    path("<int:pk>/detail/", CasioDetailView.as_view(), name="detail"),
    path("<int:pk>/update/", CasioUpdateView.as_view(), name="update"),
    path("<int:pk>/delete/", CasioDeleteView.as_view(), name="delete")
]