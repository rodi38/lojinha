import { Component, OnInit } from "@angular/core";
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { ActivatedRoute, Router } from "@angular/router";
import { ShopService } from "../shop.service";
import { ToastrService } from "ngx-toastr";
import { take } from "rxjs";
import { Product } from "src/app/type/Product";
import { MessageUtil } from "src/app/util/message-util";

@Component({
  selector: "app-register-product",
  templateUrl: "./register-product.component.html",
  styleUrls: ["./register-product.component.scss"],
})
export class RegisterProductComponent implements OnInit {
  constructor(
    private route: ActivatedRoute,
    private shopService: ShopService,
    private messageUtil: MessageUtil,
  ) {}

  productForm = new FormGroup({
    name: new FormControl<string>("", Validators.required),
    price: new FormControl<number>(0, Validators.required),
    description: new FormControl<string>(""),
    imageUrl: new FormControl<string>("", Validators.required),
  });

  ngOnInit(): void {
    if (this.route.routeConfig?.path?.includes("edit")) {
      this.productId = this.route.snapshot.params["id"];
      this.editMode = true;
      this.getProductById();
    }
  }

  editMode = false;
  productId!: number;

  getProductById(): void {
    this.shopService
      .getProductById(this.productId)
      .pipe(take(1))
      .subscribe({
        next: (res: Product) => {
          this.productForm.patchValue({ ...res });
        },
        error: (error) => {
          console.error(error);
        },
      });
  }
  createProduct() {
    this.shopService.createProduct(this.productForm.getRawValue()).pipe(take(1)).subscribe({
      next: (res) =>{
        this.messageUtil.redirectAndToastMessage("cadastrado");
        console.log(res);
      },
      error: (error) =>{
        console.error(error);
      }
    })
  }

  updateProduct() {
    if (this.productForm.valid) {
      this.shopService
        .updateProduct(this.productId, this.productForm.getRawValue())
        .pipe(take(1))
        .subscribe({
          next: (res) => {
            this.messageUtil.redirectAndToastMessage("atualizado");
            console.log(res);
          },
          error: (error) => {
            console.error(error);
          },
        });
    }
  }
}
