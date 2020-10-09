import { Component, ElementRef, Input, OnInit, Query, ViewChild } from '@angular/core';
import { DataStateChangeEvent } from '@progress/kendo-angular-grid';
import { State } from '@progress/kendo-data-query';
import { ToastrService } from 'ngx-toastr';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { KendoConfig } from '../product-grid-config';
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
  kendoConfig :KendoConfig[] = [
    {field:"M3Item",title:"M3 SKU",width:"100",filter:"numeric"},
    {field:"Description",title:"Description",width:"200"},
    {field:"JarCode",title:"Jar Code",width:"100"},
    {field:"VarietyCode",title:"Variety Code",width:"100"},
    {field:"Zambelli",title:"Zambelli",width:"100"},
    {field:"Label",title:"Label",width:"50",filter:"numeric"},
    {field:"Cap",title:"Cap",width:"50"},
    {field:"Domino",title:"Domino",width:"100"},
    {field:"UnitsPerCase",title:"Units Per Case",width:"100",filter:"numeric"},
    {field:"NetWeight",title:"Net Weight",width:"100",filter:"numeric"},
    {field:"PalletQyt",title:"Pallet Qyt",width:"100",filter:"numeric"},
    {field:"SalesDays",title:"Sales Days",width:"100",filter:"numeric"},
    {field:"BatchOrderMultiples",title:"Batch Order Multiples",width:"100",filter:"numeric"},
    {title:"Actions",width:"100"}
  ]

  constructor(private productService:ProductService, private toastr:ToastrService) { }

  ngOnInit(): void {
    this.getProducts();
  }

  changeColumnVisibility(event,title){
    var column = this.kendoConfig.find(p => p.title == title);
    column.hidden = !event.target.checked;
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
        this.getProducts();
      }else{
        this.toastr.error(result["message"]);
      }
    });
  }

  private hasExtension(fileName:string,ext:string){
    return fileName.split('.').pop() == ext;
  }
}
