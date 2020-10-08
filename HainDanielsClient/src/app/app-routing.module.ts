import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuditComponent } from './audit/audit.component';
import { ExportComponent } from './export/export.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { ProductsComponent } from './products/products.component';

const routes: Routes = [
  {path:'',redirectTo:'/products',pathMatch:'full'},

  {path:'products',component:ProductsComponent},
  {path:'export',component:ExportComponent},
  {path:'audit',component:AuditComponent},
  {path:'products/:productId',component:ProductDetailsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
