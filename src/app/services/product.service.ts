import { Observable } from 'rxjs';
import { createAction } from '@ngrx/store';

import { HttpClient } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http: HttpClient) { }

  create(data: any): Observable<any> {
    return this.http.post<any>("http://localhost:3000/products", data);
  }

  getOne(id: number): Observable<any> {
    return this.http.get<any>("http://localhost:3000/products/" + id);
  }

  update(id: number, data: any): Observable<any> {
    return this.http.put<any>("http://localhost:3000/products" + id, data);
  }

  delete(id: number): Observable<any> {
    return this.http.delete<any>("http://localhost:3000/products" + id);
  }
}
