import { Component } from "@angular/core";
import { Cart } from "../models/cart.model";

@Component({
    selector: "store-cartresume",
    templateUrl: "cartResume.component.html"
})
export class CartResumeComponent {

    constructor(private cart: Cart) { }

    get itemCount(): number {
        return this.cart.itemCount;
}
    get totalPreco(): number {
        return this.cart.totalPreco;
}

}
