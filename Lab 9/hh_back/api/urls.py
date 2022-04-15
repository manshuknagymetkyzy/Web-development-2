import imp
from django.urls import path

from api.views import company_list, company_detail, vacancies_top_ten, vacancy_details, vacancy_list, company_vacancies

urlpatterns = [
    path('companies/', company_list),
    path('companies/<int:id>/', company_detail),
    path('vacancies/', vacancy_list),
    path('vacancies/<int:id>/', vacancy_details),
    path('companies/<int:id>/vacancies/', company_vacancies),
    path('vacancies/top_ten/', vacancies_top_ten)
]