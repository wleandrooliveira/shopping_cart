import { Component, Input } from "@angular/core";
import { Produto } from "../models/Produto.model";
@Component({
    selector: "store-ratings",
    templateUrl: "ratings.component.html"
})
export class RatingsComponent {

    @Input()
    produto: Produto;

    get stars(): boolean[] {
        if (this.produto != null && this.produto.classificacao != null) {
            let total = this.produto.classificacao.map(r => r.stars)
                .reduce((prev, curr) => prev + curr, 0);
            let count = Math.round(total / this.produto.classificacao.length);
            return Array(5).fill(false).map((value, index) => {
                return index < count;
            });
        } else {
            return [];
} }
}