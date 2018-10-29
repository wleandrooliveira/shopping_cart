import { Component } from "@angular/core";
import { Repository } from "../models/repository";

@Component({
    selector: "store-pagination",
    templateUrl: "pagination.component.html"
})
export class PaginationComponent {
    constructor(private repo: Repository) { }

    get current(): number {
        return this.repo.pagination.currentPagina;
}
    get pages(): number[] {
        if (this.repo.produtos != null) {
            return Array(Math.ceil(this.repo.produtos.length
                    / this.repo.pagination.produtosPorPagina))
                .fill(0).map((x, i) => i + 1);
        } else {

            return []; }
    }
    changePage(newPagina: number) {
        this.repo.pagination.currentPagina = newPagina;
    }
}