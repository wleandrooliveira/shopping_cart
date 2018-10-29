import { Component } from "@angular/core";
import { Repository } from "../models/repository";
import { Produto } from "../models/produto.model";
import { PromocaoVendas } from "../models/PromocaoVendas.model";
@Component({
    selector: "admin-product-editor",
    templateUrl: "productEditor.component.html"
})
export class ProdutoEditorComponent {
    constructor(private repo: Repository) { }
    get produto(): Produto {
        return this.repo.produto;
    }
    get PromocaoVendas(): PromocaoVendas[] {
        return this.repo.promocaovendas;
    }
    comparePromocaoVendas(s1: PromocaoVendas, s2: PromocaoVendas) {
        return s1 && s2 && s1.produto == s2.produto;
    }
}