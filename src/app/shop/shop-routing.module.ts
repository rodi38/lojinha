import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductListComponent } from './product-list/product-list.component';
import { RegisterProductComponent } from './register-product/register-product.component';
import { ProductSearchComponent } from './product-search/product-search.component';

const routes: Routes = [
  {
    path: 'products',
    component: ProductListComponent,
  },
  {
    path: 'register',
    component: RegisterProductComponent,
  },
  {
    path: 'search',
    component: ProductSearchComponent,
  },
  {
    path: 'edit/:id',
    component: RegisterProductComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ShopRoutingModule {}
