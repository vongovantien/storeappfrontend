import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { StoreModule } from '@ngrx/store';
import { MyCounterComponent } from './counter/my-counter/my-counter.component';
import { CounterInputComponent } from './counter/counter-input/counter-input.component';
import { FormsModule } from '@angular/forms';
import { PostsListComponent } from './posts/posts-list/posts-list.component';
import { ProductCreateComponent } from './admin/product-create/product-create.component';
import { HttpClientModule } from '@angular/common/http';
import { ProductEditComponent } from './admin/product-edit/product-edit.component';
@NgModule({
  declarations: [
    AppComponent,
    MyCounterComponent,
    CounterInputComponent,
    PostsListComponent,
    ProductCreateComponent,
    ProductEditComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
    // StoreModule.forRoot({ count: counterReducer }),
    // StoreDevtoolsModule.instrument({
    //   maxAge: 25,
    //   autoPause: true,
    // }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
