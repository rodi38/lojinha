import { ActivatedRoute, Router } from "@angular/router";
import { ToastrService } from "ngx-toastr";

export class MessageUtil {

  constructor(
    private route: ActivatedRoute,
    private toastrService: ToastrService,
    private router: Router
  ) {}


  redirectAndToastMessage(msg: string) {
    this.router.navigate(["/shop/products"]).then(() => {
      this.toastrService.success(`Produto ${msg} com sucesso.`);
    });
  }
}
