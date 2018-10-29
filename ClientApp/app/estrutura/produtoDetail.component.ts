import { Component } from '@angular/core';
import { Repository } from "../models/repository";
import { Produto } from "../models/Produto.model";
import { Router, ActivatedRoute } from "@angular/router";

@Component({
    selector: "produto-detail",
    templateUrl: "produtoDetail.component.html"
})
export class ProdutoDetailComponent {

    constructor(private repo: Repository,
        router: Router,
        activeRoute: ActivatedRoute) {
        let id = Number.parseInt(activeRoute.snapshot.params["id"]);
        if (id) {
            this.repo.getProduto(id);
        } else {
            router.navigateByUrl("/");
        }
    }
    get product(): Produto {
        return this.repo.produto;
    }

}