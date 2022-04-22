import imp
from django.urls import path
from rest_framework_jwt.views import obtain_jwt_token

from api.views import company_list, company_detail, vacancies_top_ten, vacancy_details, vacancy_list, company_vacancies, CompanyListAPIView, CompanyDetailAPIView, VacancyListAPIView, VacancyDetailAPIView, VacanciesTopTenAPIView

urlpatterns = [
    path('login/', obtain_jwt_token),
    path('companies/', company_list),
    path('companies/<int:id>/', company_detail),
    #path('vacancies/', vacancy_list),
    #path('vacancies/<int:id>/', vacancy_details),
    path('companies/<int:id>/vacancies/', company_vacancies),
    #path('vacancies/top_ten/', vacancies_top_ten)
    #path('companies/', CompanyListAPIView.as_view()),
    #path('companies/<int:pk>/', CompanyDetailAPIView.as_view()),
    path('vacancies/', VacancyListAPIView.as_view()),
    path('vacancies/<int:pk>/', VacancyDetailAPIView.as_view()),
    path('vacancies/top_ten/', VacanciesTopTenAPIView.as_view())
]