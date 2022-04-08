from django.http.response import JsonResponse

from core.models import Product

def product_list(request):
    products = Product.objects.all()
    products_json = [products.to_json() for product in products]
    return JsonResponse(products, safe=False)

def product_detail(request, product_id):
    try:
        product = Product.objects.get(id=product_id)
    except Product.DoesNotExist as e:
        return JsonResponse({'message': str(e)}, status=400)

    return JsonResponse(product.to_json())