import { Component, OnInit } from '@angular/core';
import { ShopService } from '../shop.service';
import { ActivatedRoute } from '@angular/router';
import { take } from 'rxjs';
import { Product } from 'src/app/type/Product';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit{
  value = 'Clear me';
  products: Product[] = [];

  constructor(private shopService: ShopService, private route: ActivatedRoute) {}

  ngOnInit(): void {
      this.getProducts();
  }
  getProducts(){
    this.shopService.getAllProducts().pipe(take(1)).subscribe({
      next: (res)=>{
        this.products = res;
      },
      error: (error)=>{
        console.error(error);
      }
    })
  }
}
