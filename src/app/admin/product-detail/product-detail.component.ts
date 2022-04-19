import { Router, ActivatedRoute } from '@angular/router';
import { ProductService } from './../../services/product.service';
import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product';
import { HttpResponse } from '@angular/common/http';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss']
})
export class ProductDetailComponent implements OnInit {
  id: number = 0;
  product: Product = {
    id: 0,
    name: '',
    price: 0,
    sale_price: 0,
    image: ''
  }
  constructor(private productService: ProductService, private _route: ActivatedRoute) { }

  ngOnInit(): void {
    this.id = this._route.snapshot.params['id'];
    this.productService.getOne(this.id).subscribe((res: Product) => this.product = res)
  }

}
