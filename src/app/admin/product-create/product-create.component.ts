import { Product } from 'src/app/models/product';
import { ProductService } from './../../services/product.service';
import { Component, Inject, OnInit } from '@angular/core';
import {
  FormControl,
  FormControlName,
  FormGroup,
  Validators,
} from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ProductListComponent } from '../product-list/product-list.component';

@Component({
  selector: 'app-product-create',
  templateUrl: './product-create.component.html',
  styleUrls: ['./product-create.component.scss'],
})
export class ProductCreateComponent implements OnInit {
  constructor(
    private productService: ProductService,
    private route: Router,
    public dialogRef: MatDialogRef<ProductListComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Product
  ) {}

  productFormCreate: FormGroup = new FormGroup({
    name: new FormControl('vantien', [Validators.required, Validators.email]),
    price: new FormControl(),
    sale_price: new FormControl(),
    image: new FormControl(),
  });
  ngOnInit(): void {}

  onCreate() {
    this.productService
      .create(this.productFormCreate.value)
      .subscribe((data) => {
        this.route.navigate(['/product-list']);
        console.log(data);
      });
  }
}
