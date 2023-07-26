import { Location } from "@angular/common";
import { Injectable } from "@angular/core";
import { Router } from "@angular/router";

import { ToastrService } from "ngx-toastr";
// import { debounceTime, pipe, window } from "rxjs";

@Injectable({
  providedIn: "root",
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
