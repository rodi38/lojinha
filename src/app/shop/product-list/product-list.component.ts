import { ToastrService } from "ngx-toastr";
import { Component, OnInit } from "@angular/core";
import { ShopService } from "../shop.service";
import { ActivatedRoute, Route } from "@angular/router";
import { debounceTime, filter, take } from "rxjs";
import { Product } from "src/app/type/Product";
import { MessageUtil } from "src/app/util/message-util";
import { FormControl, Validators } from "@angular/forms";

@Component({
  selector: "app-product-list",
  templateUrl: "./product-list.component.html",
  styleUrls: ["./product-list.component.scss"],
})
export class ProductListComponent implements OnInit {
  value = "Clear me";
  products: Product[] = [];

  theProductsArrived = false;
  search = new FormControl<string>("", Validators.minLength(3));

  spinnerProductCheck() {
    this.theProductsArrived = this.products.length !== 0;
  }

  constructor(
    private shopService: ShopService,
    private messageUtil: MessageUtil,
    private route: ActivatedRoute,
  ) {}

  ngOnInit(): void {
    this.getSearchQueryParams();
    // this.search.valueChanges.pipe(debounceTime(3000), take(1)).subscribe((value) => {
    //   this.search.markAsTouched();
    // });
  }

  searchProducts(event: Event): void {
    const searchValue = (event.target as HTMLInputElement).value;
    this.getProducts(searchValue);
  }

  getProducts(searchValue: string = "") {
    console.log("searchValue:", searchValue);
    this.shopService
      .getAllProducts(searchValue)
      .pipe(debounceTime(3000), take(1))
      .subscribe({
        next: (res) => {
          this.products = res;
          this.spinnerProductCheck();
        },
        error: (error) => {
          console.error(error);
        },
      });
  }

  deleteProduct(id: number) {
    if(confirm('Tem certeza que quer deletar o produto? ')){
    this.shopService
      .deleteProduct(id)
      .pipe(take(1))
      .subscribe({
        next: () => {
          this.messageUtil.redirectAndToastMessage("deletado");
          this.getSearchQueryParams();
        },
        error: (error) => {
          console.error(error);
        },
      });

    }

  }

  getSearchQueryParams(): void {
    let searchValue: string = this.route.snapshot.queryParams["search"];
    this.search.setValue(searchValue);
    this.getProducts(searchValue);
  }

  
}
