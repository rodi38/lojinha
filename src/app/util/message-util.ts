import { Injectable } from "@angular/core";
import {  Router } from "@angular/router";
import { ToastrService } from "ngx-toastr";

@Injectable({
  providedIn: 'root'
})
export class MessageUtil {

  constructor(
    private toastrService: ToastrService,
    private router: Router
  ) {}


  redirectAndToastMessage(msg: string) {
    this.router.navigate(["/shop/products"]).then(() => {
      this.toastrService.success(`Produto ${msg} com sucesso.`);
    });
  }
}
