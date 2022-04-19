import { ProductService } from './../../services/product.service';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormControlName, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-product-create',
  templateUrl: './product-create.component.html',
  styleUrls: ['./product-create.component.scss']
})
export class ProductCreateComponent implements OnInit {

  constructor(private productService: ProductService, private route: Router) { }

  productFormCreate: FormGroup = new FormGroup({
    name: new FormControl('vantien', [Validators.required, Validators.email]),
    price: new FormControl(),
    sale_price: new FormControl(),
    image: new FormControl(),
  })
  ngOnInit(): void {
  }

  onCreate() {
    this.productService.create(this.productFormCreate.value).subscribe(data => {
      this.route.navigate(['/product-list'])
    })
  }

}
