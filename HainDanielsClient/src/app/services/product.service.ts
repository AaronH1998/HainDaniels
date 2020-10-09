import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { State, toDataSourceRequestString } from '@progress/kendo-data-query';
import { GridDataResult } from '@progress/kendo-angular-grid';
import { Product } from '../product';

@Injectable({
  providedIn: 'root'
})

export class ProductService {
  private apiUrl =  environment.apiUrl + '/api/Product';

  constructor(private httpClient:HttpClient) { }

  saveProduct(product:Product):Observable<Response>{
    try{
      return this.httpClient.put<Response>(this.apiUrl,product);
    }catch{
      return;
    }
  }

  getProduct(productId:number):Observable<Product>{
    return this.httpClient.get<Product>(`${this.apiUrl}/${productId}`);
  }

  getProducts(state:State): Observable<any>{
    const queryStr = `${toDataSourceRequestString(state)}`

    return this.httpClient.get(`${this.apiUrl}?${queryStr}`).pipe(
      map(
        (result):GridDataResult =>{
          let gridReult = {
            data:result["Data"],
            total:result["Total"]
          };
          return gridReult;
        })
      );
  }

  importFile(fileToImport:File):Observable<Response>{
    const formData:FormData = new FormData();
    formData.append('itemsIn',fileToImport,fileToImport.name);

    return this.httpClient.post<Response>(this.apiUrl,formData);
  }
  
  exportFile(type:string): Observable<Blob>{
    return this.httpClient.get(`${this.apiUrl}/Export/${type}`,{responseType:'blob'});
  }
}