import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, switchMap, tap } from 'rxjs/operators';
import { NgxCsvParser } from 'ngx-csv-parser';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Product } from '../product';
import { State, toDataSourceRequestString } from '@progress/kendo-data-query';
import { GridDataResult } from '@progress/kendo-angular-grid';

@Injectable({
  providedIn: 'root'
})

export class ProductService {
  private apiUrl =  environment.apiUrl + '/api/Product';
  constructor(private httpClient:HttpClient) { }

  getItems(state:State): Observable<any>{
    const queryStr = `${toDataSourceRequestString(state)}`

    return this.httpClient.get(`${this.apiUrl}?${queryStr}`).pipe(
      map(
        (result):GridDataResult =>{
          let gridReult = {
            data:result["Data"],
            total:result["Total"]
          };
          return gridReult;
        }
        // ({data,total}:GridDataResult):GridDataResult =>{
        // return{
        //   data:data,
        //   total:total
        // };
      // }
      )
      );
  }

  importFile(fileToImport:File):Observable<Response>{
    

    const formData:FormData = new FormData();
    formData.append('itemsIn',fileToImport,fileToImport.name);

    return this.httpClient.post<Response>(this.apiUrl,formData);
  }
}