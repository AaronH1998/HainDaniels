import { Component, OnInit } from '@angular/core';
import { DataStateChangeEvent } from '@progress/kendo-angular-grid';
import { State } from '@progress/kendo-data-query';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { AuditService } from '../services/audit.service';

@Component({
  selector: 'app-audit',
  templateUrl: './audit.component.html',
  styleUrls: ['./audit.component.scss']
})
export class AuditComponent implements OnInit {
  title = "Audit"
  state:State ={
    skip:0,
    take:10,
    filter:{filters:[],logic:'or'},
    sort:[]
  };
  audit:Observable<any>;

  constructor(private auditService:AuditService) { }

  ngOnInit(): void {
    this.getAudit();
  }

  private getAudit(){
    this.auditService.getAudit(this.state).pipe(
      tap(data=>{
        this.audit = data;
      })
    ).subscribe();
  }
  
  public dataStateChange(state:DataStateChangeEvent){
    this.state = state;
    this.getAudit();
  }

}
