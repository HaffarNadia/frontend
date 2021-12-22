import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class OrderDetailsService {

  constructor(private _http:HttpClient) { }

  // connecting fron to back
  apiUrl = 'http://localhost:3000/product';

  //get all products
  getAllProducts():Observable<any> {
     return this._http.get(`${this.apiUrl}`);
  }
  
  addProduct(data:any):Observable<any> {
    return this._http.post(`${this.apiUrl}`,data);
  }
  deleteProduct(data:any):Observable<any> {
    return this._http.delete(`${this.apiUrl}`,data);
  }

  
}
