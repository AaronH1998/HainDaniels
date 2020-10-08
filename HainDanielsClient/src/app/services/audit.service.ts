import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { GridDataResult } from '@progress/kendo-angular-grid';
import { State, toDataSourceRequestString } from '@progress/kendo-data-query';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuditService {
  private apiUrl =  environment.apiUrl + '/api/Audit';

  constructor(private httpClient:HttpClient) { }

  getAudit(state:State):Observable<any>{
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

}
