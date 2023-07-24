import { MatInputModule } from '@angular/material/input';
import { NgModule, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductSearchComponent } from './product-search/product-search.component';
import { RegisterProductComponent } from './register-product/register-product.component';
import { ShopRoutingModule } from './shop-routing.module';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {MatIconModule} from '@angular/material/icon';



@NgModule({
  declarations: [
    ProductListComponent,
    ProductSearchComponent,
    RegisterProductComponent
  ],
  imports: [
    CommonModule,
    ShopRoutingModule,
    MatButtonModule,
    MatCardModule,
    MatIconModule,
    MatInputModule
  ]
})
export class ShopModule { }
