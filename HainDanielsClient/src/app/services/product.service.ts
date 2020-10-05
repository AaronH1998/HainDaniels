import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Product } from '../product';

@Injectable({
  providedIn: 'root'
})

export class ProductService {
  private apiUrl =  environment.apiUrl + '/api/Product';

  constructor(private httpClient:HttpClient) { }

  getItems(): Observable<Product[]>{
    return this.httpClient.get<Product[]>(this.apiUrl);
  }
}
