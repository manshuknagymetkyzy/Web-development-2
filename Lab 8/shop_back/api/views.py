from sre_constants import CATEGORY_UNI_DIGIT
from django.shortcuts import render
from django.http.response import JsonResponse

from api.models import Product, Category

def category_list(request):
    categories = Category.objects.all()
    categories_json = [category.toJson() for category in categories]
    return JsonResponse(categories_json, safe=False)

def category_detail(request, id):
    try:
        category = Category.objects.get(id=id)
    except Category.DoesNotExist as e:
        return JsonResponse({'message': str(e)}, status=400)
    return JsonResponse(category.toJson())

def product_list(request):
    products = Product.objects.all()
    products_json = [product.toJson() for product in products]
    return JsonResponse(products_json, safe=False)

def product_detail(request, id):
    try:
        product = Product.objects.get(id=id)
    except Product.DoesNotExist as e:
        return JsonResponse({'message': str(e)}, status=400)
        
    return JsonResponse(product.toJson())

def category_products(request, id):
    products = Product.objects.all().filter(category_id = id)
    products_json = [product.toJson() for product in products]
    return JsonResponse(products_json, safe=False)
    