
import { Component } from "@angular/core";
import { Repository } from "../models/repository";
import { Produto } from "../models/Produto.model";
import { Cart } from "../models/cart.model";

@Component({
    selector: "store-produto-list",
    templateUrl: "produtoList.component.html"
})

export class ProdutoListComponent {

    constructor(private repo: Repository, private cart: Cart) { }

    get produtos(): Produto[] {

    if (this.repo.produtos != null && this.repo.produtos.length > 0) {
        let pageIndex = (this.repo.pagination.currentPagina - 1)
            * this.repo.pagination.produtosPorPagina;
        return this.repo.produtos.slice(pageIndex,
            pageIndex + this.repo.pagination.produtosPorPagina);
            }
    }
    addToCart(produto: Produto) {
        this.cart.addProduto(produto);

    }

}