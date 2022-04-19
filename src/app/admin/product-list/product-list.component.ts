import { ProductCreateComponent } from './../product-create/product-create.component';
import { Product } from './../../models/product';
import { ProductService } from './../../services/product.service';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss'],
})
export class ProductListComponent implements OnInit {
  products: Product[] | undefined;
  constructor(private productService: ProductService, public dialog: MatDialog) {}

  ngOnInit(): void {
    this.productService.getAll().subscribe((data) => (this.products = data));
  }
  openDialog(): void {
    const dialogRef = this.dialog.open(ProductCreateComponent, {
      width: '250px',
    });

    dialogRef.afterClosed().subscribe(result => {
    });
  }
}
