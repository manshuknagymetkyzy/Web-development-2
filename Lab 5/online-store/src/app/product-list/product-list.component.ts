import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { products } from '../products';
import {CartService} from '../cart.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent {
  products = products;
  public categoryid: number;
  

  constructor(private route: ActivatedRoute) { 
    const routeParams = this.route.snapshot.paramMap;

    this.categoryid = Number(routeParams.get('categoryid'));
  }

  ngOnInit() {

    const routeParams = this.route.snapshot.paramMap;

    this.categoryid = Number(routeParams.get('categoryid'));


  }
}


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/