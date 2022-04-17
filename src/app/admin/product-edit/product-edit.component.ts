import { ActivatedRoute } from '@angular/router';
import { FormGroup, FormControl } from '@angular/forms';
import { ProductService } from './../../services/product.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-edit',
  templateUrl: './product-edit.component.html',
  styleUrls: ['./product-edit.component.scss']
})
export class ProductEditComponent implements OnInit {
  id: number = 0;
  constructor(private productService: ProductService, private _route: ActivatedRoute) { }

  productFormEdit: FormGroup = new FormGroup({
    name: new FormControl(),
    price: new FormControl(),
    sale_price: new FormControl(),
    image: new FormControl(),
  })
  ngOnInit(): void {
    this.id = this._route.snapshot.params['id'];
    this.productService.getOne(this.id).subscribe(data => {
      this.productFormEdit = new FormGroup({
        name: new FormControl(),
        price: new FormControl(),
        sale_price: new FormControl(),
        image: new FormControl(),
      })
    })
  }

  onUpdate() {
    this.productService.update(this.id, this.productFormEdit.value).subscribe(data => {
      console.log(data)
    })
  }

}
