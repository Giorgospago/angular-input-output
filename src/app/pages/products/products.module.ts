import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductsRoutingModule } from './products-routing.module';
import { ProductsComponent } from './products.component';
import {ProductTemplateComponent} from "../../components/product-template/product-template.component";


@NgModule({
  declarations: [ProductsComponent, ProductTemplateComponent],
  exports: [
    ProductTemplateComponent
  ],
  imports: [
    CommonModule,
    ProductsRoutingModule
  ]
})
export class ProductsModule { }
