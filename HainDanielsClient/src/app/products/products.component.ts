import { Component, ElementRef, Input, OnInit, Query, ViewChild } from '@angular/core';
import { DataStateChangeEvent } from '@progress/kendo-angular-grid';
import { State } from '@progress/kendo-data-query';
import { ToastrService } from 'ngx-toastr';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
  @ViewChild('importFileInput') importInput: ElementRef;
  title="Products";
  state:State ={
    skip:0,
    take:10,
    filter:{filters:[],logic:'or'},
    sort:[]
  };
  products:Observable<any>;

  constructor(private productService:ProductService, private toastr:ToastrService) { }

  ngOnInit(): void {
    this.getProducts();
  }

  private getProducts(){
    this.productService.getProducts(this.state).pipe(
      tap(data=>{
        this.products = data;
      })
    ).subscribe();
  }

  public dataStateChange(state:DataStateChangeEvent){
    this.state = state;
    this.getProducts();
  }

  public importFile(files:FileList){
    let file = files[0];

    if(file == undefined){
      return
    }

    if(!this.hasExtension(file.name,'csv')){
      this.toastr.error("File must be of CSV format");
      return;

    }else{
      this.toastr.info("Importing file to database",'',{
        timeOut: 0,
        extendedTimeOut:0
      });
    }

    this.productService.importFile(file).subscribe((result)=>{
      this.importInput.nativeElement.value = null;
      this.toastr.clear();
      if(result["success"]){
        this.toastr.success(result["message"]);
      }else{
        this.toastr.error(result["message"]);
      }
    });
  }

  private hasExtension(fileName:string,ext:string){
    return fileName.split('.').pop() == ext;
  }
}
