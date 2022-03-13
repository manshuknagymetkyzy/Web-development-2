import { Component, Input, OnInit } from '@angular/core';
import { products } from '../products';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css']
})
export class ProductItemComponent implements OnInit {
  products = products;
  // @ts-ignore
  @Input categoryid: number;
  constructor() { 
    
  }

  remove(product: any) {

    product.show = false;

  }

  like(product: any) {

    product.likes += 1;

  }

  ngOnInit(): void {

  }

}
