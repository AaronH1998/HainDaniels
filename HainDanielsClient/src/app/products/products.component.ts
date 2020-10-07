import { Component, OnInit } from '@angular/core';
import { GridDataResult, PageChangeEvent } from '@progress/kendo-angular-grid';
import { ToastrService } from 'ngx-toastr';
import { Product } from '../product';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
  title="Products";
  pageSize=10;
  skip=0;
  gridView:GridDataResult;

  private products:Product[];

  constructor(private productService:ProductService, private toastr:ToastrService) { }

  ngOnInit(): void {
    this.getAllProducts();
  }

  private getAllProducts(){
    this.productService.getItems().subscribe(products => {
      this.products = products;
      this.loadProductPage();
    });
  }

  public pageChange(event:PageChangeEvent){
    this.skip = event.skip;
    this.loadProductPage();
  }

  private loadProductPage(){
    this.gridView = {
      data: this.products.slice(this.skip,this.skip + this.pageSize),
      total:this.products.length
    };
  }

  public importFile(files:FileList){
    let file = files[0];
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
