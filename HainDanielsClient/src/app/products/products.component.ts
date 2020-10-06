import { Component, OnInit } from '@angular/core';
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

  constructor(private productService:ProductService) { }

  ngOnInit(): void {
    this.getProducts();
  }

  getProducts(){
    this.productService.getItems().subscribe(products => this.products = products);
  }

  importFile(files:FileList){
    let file = files[0];
    if(!this.hasExtension(file.name,'csv')){
      return;
    }
    this.productService.importFile(file).subscribe((result)=>{
      console.log(result);
    });
  }
  private hasExtension(fileName:string,ext:string){
    return fileName.split('.').pop() == ext;
  }
}
