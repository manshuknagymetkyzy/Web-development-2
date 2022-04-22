from django.http import Http404
from rest_framework.response import Response
from rest_framework.views import APIView

from api.serializers import CompanySerializer2, VacancySerializer
from api.models import Company, Vacancy

class CompanyListAPIView(APIView):
    def get(self, request):
        companies = Company.objects.all()
        serializer = CompanySerializer2(companies, many=True)
        return Response(serializer.data, safe=False)

    def post(self, request):
        serializer = CompanySerializer2(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors)

class CompanyDetailAPIView(APIView):
    def get_object(self, pk):
        try:
            return Company.objects.get(id=pk)
        except Company.DoesNotExist as e:
            raise Http404

    def get(self, request, pk=None):
        company = self.get_object(pk)
        serializer = CompanySerializer2(company)
        return Response(serializer.data)

    def put(self, request, pk=None):
        company = self.get_object(pk)
        serializer = CompanySerializer2(instance=company, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors)

    def delete(self, request, pk=None):
        company = self.get_object(pk)
        company.delete()
        return Response({'message': 'deleted'}, status=204)

class VacancyListAPIView(APIView):
    def get(self, request):
        companies = Vacancy.objects.all()
        serializer = VacancySerializer(companies, many=True)
        return Response(serializer.data)


class VacancyDetailAPIView(APIView):
    def get_object(self, pk):
        try:
            return Vacancy.objects.get(id=pk)
        except Vacancy.DoesNotExist as e:
            raise Http404

    def get(self, request, pk=None):
        company = self.get_object(pk)
        serializer = VacancySerializer(company)
        return Response(serializer.data)

class VacanciesTopTenAPIView(APIView):
    def get(self, request):
        vacancies = Vacancy.objects.order_by("-salary")[:10]
        serializer = VacancySerializer(vacancies, many=True)
        return Response(serializer.data)
    