import imp
from rest_framework.decorators import api_view

from django.http.response import HttpResponse, JsonResponse

from rest_framework.response import Response
from rest_framework.request import Request

from api.models import Company, Vacancy
from api.serializers import CompanySerializer, CompanySerializer2, VacancySerializer

@api_view(['GET', 'POST'])
def company_list(request):
    if request.method == 'GET':
        companies = Company.objects.all()
        serializer = CompanySerializer2(companies, many=True)
        return Response(serializer.data)
    elif request.method == 'POST':
        serializer = CompanySerializer2(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors)

@api_view(['GET', 'PUT', 'DELETE'])
def company_detail(request, id):
    try:
        company = Company.objects.get(id=id)
    except Company.DoesNotExist as e:
        return Response({'message': str(e)}, status=400)

    if request.method == 'GET':
        serializer = CompanySerializer2(company)
        return Response(serializer.data)
    elif request.method == 'PUT':
        serializer = CompanySerializer2(instance=company, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors)
    elif request.method == 'DELETE':
        company.delete()
        return Response({'message': 'deleted'}, status=204)

@api_view(['GET'])
def company_vacancies(request, id):
    try:
        vacancies = Vacancy.objects.filter(company=id)
    except Company.DoesNotExist as e:
        return JsonResponse({'message': str(e)}, status=400)
    serializer = VacancySerializer(vacancies, many=True)
    return Response(serializer.data)