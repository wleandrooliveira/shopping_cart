import { Component } from '@angular/core';
import { Repository } from "../models/repository";

@Component({
    selector: "produto-filter",
    templateUrl: "produtoFilter.component.html"
})
export class ProdutoFilterComponent {
    public produto = "chess";

    constructor(private repo: Repository) { }
    
    setProduto(produto: string) {
        this.repo.filter.produto= produto;
        this.repo.getProdutos();
} 
}