from django.urls import path

from api.views import category_list, category_detail, product_list, product_detail, category_products

urlpatterns = [
    path('categories/', category_list),
    path('categories/<int:id>/', category_detail),
    path('products/', product_list),
    path('products/<int:id>/', product_detail),
    path('categories/<int:id>/products/', category_products)
]