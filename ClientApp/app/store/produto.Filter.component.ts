import { Component } from "@angular/core";
import { Repository } from "../models/repository";
@Component({
    selector: "store-produtofilter",
    templateUrl: "produtoFilter.component.html"
})
export class ProdutoFilterComponent {
    constructor(private repo: Repository) { }

    get produtossearch(): string[] {
        return this.repo.produtosearch;
}
    get currentProduto(): string {
        return this.repo.filter.produto;
}
    setCurrentProduto(newProduto: string) {
        this.repo.filter.produto = newProduto;
        this.repo.getProdutos();
}
}