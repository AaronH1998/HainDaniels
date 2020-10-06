import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import{NgxCsvParserModule} from 'ngx-csv-parser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { GridModule } from '@progress/kendo-angular-grid';
import { ProductsComponent } from './products/products.component';
import { NavigationLinksComponent } from './navigation-links/navigation-links.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductsComponent,
    NavigationLinksComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    GridModule,
    NgxCsvParserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
