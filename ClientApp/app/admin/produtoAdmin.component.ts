import { Component } from "@angular/core";
import { Repository } from "../models/repository";
import { Produto } from "../models/produto.model";
import { PromocaoVendas } from "../models/PromocaoVendas.model";


@Component({
    templateUrl: "produtoAdmin.component.html"
})
export class ProdutoAdminComponent {

    constructor(private repo: Repository) { }
    tableMode: boolean = true;
    get produto(): Produto {
        return this.repo.produto;
    }
    selectProduto(id: number) {
        this.repo.getProduto(id);
    }
    saveProduto() {
        if (this.repo.produto.produtoId == null) {
            this.repo.createProduto(this.repo.produto);
        } else {
            this.repo.replaceProduto(this.repo.produto);
        }
        this.clearProduto()
        this.tableMode = true;
    }
    deleteProduct(id: number) {
        this.repo.deleteProduto(id);
    }
    clearProduto() {
        this.repo.produto = new Produto();
        this.tableMode = true;
    }
    get produtos(): Produto[] {
        return this.repo.produtos;
    }
}