import { Location } from '@angular/common';
import { Component, OnInit, ViewChild, ViewChildren } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Product } from '../product';
import { ProductDetailsFieldComponent } from '../product-details-field/product-details-field.component';
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
  @ViewChildren(ProductDetailsFieldComponent) fieldComponents;
  mode:string = "view";

  constructor(private productService:ProductService, private route:ActivatedRoute, private router:Router, private toastr: ToastrService) { }

  ngOnInit(): void {
    let productId = this.route.snapshot.paramMap.get("productId");
    this.getProduct(productId);
  }

  private getProduct(productId){
    this.productService.getProduct(productId).subscribe((data)=>{
      this.product = data;
    });
  }
  
  goBack(){
    this.router.navigate(['/products']);
  }

  enableEditing(){
    this.fieldComponents.forEach(child => {
      child.input.nativeElement.readOnly = false;
    });
    this.mode = "edit";
  }

  disableEditing(){
    this.fieldComponents.forEach(child => {
      child.input.nativeElement.readOnly = true;
    });
    this.mode = "view";
  }

  saveProduct(){
    this.productService.saveProduct(this.product).subscribe((response)=>{
      if(!response){
        this.toastr.error("Product failed to save due to invalid data");
      }else if(response["success"]== false){
        this.toastr.error(response["message"]);
      }else{
        this.toastr.success(response["message"]);
      }
    });
  }
}