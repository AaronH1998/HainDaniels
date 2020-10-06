import { Component, OnInit } from '@angular/core';
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
  products:Product[];

  constructor(private productService:ProductService, private toastr:ToastrService) { }

  ngOnInit(): void {
    this.getProducts();
  }

  getProducts(){
    this.productService.getItems().subscribe(products => this.products = products);
  }

  importFile(files:FileList){
    let file = files[0];
    if(!this.hasExtension(file.name,'csv')){
      this.toastr.error("File must be of CSV format");
      return;
    }else{
      this.toastr.info("Importing file to database");
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
