import { Component, OnInit } from '@angular/core';
import { Product } from '../product';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductsComponent implements OnInit {
  products:Product[]
  constructor(private productService:ProductService) { }

  ngOnInit(): void {
    this.getProducts();
  }

  getProducts(){
    this.productService.getItems().subscribe(products => this.products = products);
  }
}
