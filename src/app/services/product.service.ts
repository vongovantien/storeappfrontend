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
    return this.http.post<any>("http://localhost:3000/posts", data);
  }

  getOne(id: number): Observable<any> {
    return this.http.get<any>("http://localhost:3000/posts" + id);
  }


}
