import { ProductCreateComponent } from './admin/product-create/product-create.component';

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductDetailComponent } from './admin/product-detail/product-detail.component';
import { ProductEditComponent } from './admin/product-edit/product-edit.component';
import { AboutComponent } from './pages/about/about.component';

const routes: Routes = [{
  path: "admin/:id",
  component: ProductDetailComponent
},
{
  path: "edit/:id",
  component: ProductEditComponent
},
{
  path: "admin/create",
  component: ProductCreateComponent
},
{
  path: "about",
  component: AboutComponent
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
