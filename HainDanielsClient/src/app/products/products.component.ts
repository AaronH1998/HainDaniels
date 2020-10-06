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
    this.productService.importFile(files.item(0)).subscribe((result)=>{
      console.log(result);
    });
  }
}
