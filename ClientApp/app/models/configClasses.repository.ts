export class Filter {
    produto?: string;
    search?: string;
    related: boolean = false;

    reset() {
        this.produto = this.search = null;
        this.related = false;
    }
}

export class Pagination {
    produtosPorPagina: number = 4;
    currentPagina = 1;
}