import { Injectable } from "@angular/core";
import { Produto } from "./Produto.model";
import { Repository } from "./repository";

@Injectable()
export class Cart {
    selections: ProdutoSelect[] = [];
    itemCount: number = 0;
    totalPreco: number = 0;

    constructor(private repo: Repository) {
        repo.getSessionData("cart").subscribe(cartData => {
            if (cartData != null) {
                cartData.map(item => new ProdutoSelect(this, item.produtoId,
                    item.nome, item.preco, item.quantidade))
                    .forEach(item => this.selections.push(item));
                this.update(false);
            }
        });
    }

    addProduto(produto: Produto) {
        let selection = this.selections
            .find(ps => ps.produtoId == produto.produtoId);
        if (selection) {
            selection.quantity++;
        } else {
            this.selections.push(new ProdutoSelect(this,
                produto.produtoId, produto.nome,
                produto.preco, 1));
        }
        this.update();
    }
    updateQuantidade(produtoId: number, quantity: number) {
        if (quantity > 0) {
            let selection = this.selections.find(ps => ps.produtoId == produtoId);
            if (selection) {
                selection.quantity = quantity;
            }
        } else {
            let index = this.selections.findIndex(ps => ps.produtoId == produtoId);
            if (index != -1) {
                this.selections.splice(index, 1);
            }
            this.update();
        }
    }
    clear() {
        this.selections = [];
        this.update();
    }
    update(storeData: boolean = true) {
        this.itemCount = this.selections.map(ps => ps.quantity)
            .reduce((prev, curr) => prev + curr, 0);
        this.totalPreco = this.selections.map(ps => ps.preco * ps.quantity)
            .reduce((prev, curr) => prev + curr, 0);
        if (storeData) {
            this.repo.storeSessionData("cart", this.selections.map(s => {
                return {
                    produtoId: s.produtoId, name: s.nome,
                    preco: s.preco, quantidade: s.quantity
                }
            }));
        }
    }
}


export class ProdutoSelect {
    constructor(public cart: Cart,
        public produtoId?: number,
        public nome?: string,
        public preco?: number,
        private quantidade?: number) { }

    get quantity() {
        return this.quantidade;
    }
    set quantity(newQuantidade: number) {
        this.quantidade = newQuantidade;
        this.cart.update();
    }
}