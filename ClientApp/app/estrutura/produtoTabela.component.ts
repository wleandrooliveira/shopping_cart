import { Component } from '@angular/core';
import { Repository } from "../models/repository";
import { Produto } from "../models/Produto.model";
import { Router } from "@angular/router";

@Component({
    selector: "produto-tabela",
    templateUrl: "./produtoTabela.component.html"
})
export class ProdutoTabelaComponent {
    constructor(private repo: Repository,
        private router: Router) { }

    get produtos(): Produto[] {
        return this.repo.produtos;
    }

    selectProduto(id: number) {
        this.repo.getProduto(id);
        this.router.navigateByUrl("/detalhe");

    }
}