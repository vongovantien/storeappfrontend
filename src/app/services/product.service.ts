import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';
import { Product } from '../models/product';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  private baseUrl = 'http://localhost:3000/products/';
  private httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    }),
  };
  constructor(private http: HttpClient) {}

  getAll(): Observable<any> {
    return this.http.get<any>(this.baseUrl);
  }
  create(data: any): Observable<any> {
    return this.http.post<any>(this.baseUrl, data, this.httpOptions);
  }

  getOne(id: number): Observable<any> {
    return this.http.get<Product>(this.baseUrl + id);
  }

  update(id: number, data: any): Observable<any> {
    return this.http.put<any>(this.baseUrl + id, data);
  }

  delete(id: number): Observable<any> {
    return this.http.delete<any>(this.baseUrl + id);
  }
}
