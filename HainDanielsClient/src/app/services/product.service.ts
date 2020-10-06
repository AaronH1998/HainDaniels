import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { switchMap } from 'rxjs/operators';
import { NgxCsvParser } from 'ngx-csv-parser';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Product } from '../product';

@Injectable({
  providedIn: 'root'
})

export class ProductService {
  private apiUrl =  environment.apiUrl + '/api/Product';
  constructor(private httpClient:HttpClient,private ngxCsvParser:NgxCsvParser) { }

  getItems(): Observable<Product[]>{
    return this.httpClient.get<Product[]>(this.apiUrl);
  }

  importFile(fileToImport:File):Observable<Response>{
    const formData:FormData = new FormData();
    formData.append('itemsIn',fileToImport,fileToImport.name);

    return this.httpClient.post<Response>(this.apiUrl,formData);
  }
}