import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from '../product';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss'],
})
export class ProductDetailsComponent implements OnInit {
  title = "Product Details - ";
  product: Product= {
    M3Item:0,Description:'',JarCode:'',VarietyCode:'',Zambelli:'',Label:0,Cap:'',Domino:'',UnitsPerCase:0,NetWeight:0,PalletQyt:0,SalesDays:0,BatchOrderMultiples:0
  };
  constructor(private productService:ProductService, private route:ActivatedRoute) { }

  ngOnInit(): void {
    let productId = this.route.snapshot.paramMap.get("productId");
    this.getProduct(productId);
  }

  private getProduct(productId){
    this.productService.getProduct(productId).subscribe((data)=>{
      this.product = data;
    });
  }
}