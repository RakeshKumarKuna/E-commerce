import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApidataService {

  constructor(private http:HttpClient) { }
  public getcartItems():Observable<any[]>{
   return this.http.get<any[]>("https://fakestoreapi.com/products/category/jewelery");
  }

}
