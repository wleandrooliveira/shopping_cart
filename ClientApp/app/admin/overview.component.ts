import { Component } from "@angular/core";
import { Repository } from "../models/repository";
import { Produto } from "../models/produto.model";
import { Order } from "../models/order.model";

@Component({
    templateUrl: "overview.component.html"
})
export class OverviewComponent {
    constructor(private repo: Repository) { }
    get produtos(): Produto[] {
        return this.repo.produtos;
    }
    get orders(): Order[] {
        return this.repo.orders;
    }
}