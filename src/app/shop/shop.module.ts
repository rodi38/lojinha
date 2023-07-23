import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductSearchComponent } from './product-search/product-search.component';
import { RegisterProductComponent } from './register-product/register-product.component';
import { ShopRoutingModule } from './shop-routing.module';



@NgModule({
  declarations: [
    ProductListComponent,
    ProductSearchComponent,
    RegisterProductComponent
  ],
  imports: [
    CommonModule,
    ShopRoutingModule,
  ]
})
export class ShopModule { }
