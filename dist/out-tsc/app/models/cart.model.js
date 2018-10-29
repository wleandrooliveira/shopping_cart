"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var repository_1 = require("./repository");
var Cart = /** @class */ (function () {
    function Cart(repo) {
        var _this = this;
        this.repo = repo;
        this.selections = [];
        this.itemCount = 0;
        this.totalPreco = 0;
        repo.getSessionData("cart").subscribe(function (cartData) {
            if (cartData != null) {
                cartData.map(function (item) { return new ProdutoSelect(_this, item.produtoId, item.nome, item.preco, item.quantidade); })
                    .forEach(function (item) { return _this.selections.push(item); });
                _this.update(false);
            }
        });
    }
    Cart.prototype.addProduto = function (produto) {
        var selection = this.selections
            .find(function (ps) { return ps.produtoId == produto.produtoId; });
        if (selection) {
            selection.quantity++;
        }
        else {
            this.selections.push(new ProdutoSelect(this, produto.produtoId, produto.nome, produto.preco, 1));
        }
        this.update();
    };
    Cart.prototype.updateQuantidade = function (produtoId, quantity) {
        if (quantity > 0) {
            var selection = this.selections.find(function (ps) { return ps.produtoId == produtoId; });
            if (selection) {
                selection.quantity = quantity;
            }
        }
        else {
            var index = this.selections.findIndex(function (ps) { return ps.produtoId == produtoId; });
            if (index != -1) {
                this.selections.splice(index, 1);
            }
            this.update();
        }
    };
    Cart.prototype.clear = function () {
        this.selections = [];
        this.update();
    };
    Cart.prototype.update = function (storeData) {
        if (storeData === void 0) { storeData = true; }
        this.itemCount = this.selections.map(function (ps) { return ps.quantity; })
            .reduce(function (prev, curr) { return prev + curr; }, 0);
        this.totalPreco = this.selections.map(function (ps) { return ps.preco * ps.quantity; })
            .reduce(function (prev, curr) { return prev + curr; }, 0);
        if (storeData) {
            this.repo.storeSessionData("cart", this.selections.map(function (s) {
                return {
                    produtoId: s.produtoId, name: s.nome,
                    preco: s.preco, quantidade: s.quantity
                };
            }));
        }
    };
    Cart = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [repository_1.Repository])
    ], Cart);
    return Cart;
}());
exports.Cart = Cart;
var ProdutoSelect = /** @class */ (function () {
    function ProdutoSelect(cart, produtoId, nome, preco, quantidade) {
        this.cart = cart;
        this.produtoId = produtoId;
        this.nome = nome;
        this.preco = preco;
        this.quantidade = quantidade;
    }
    Object.defineProperty(ProdutoSelect.prototype, "quantity", {
        get: function () {
            return this.quantidade;
        },
        set: function (newQuantidade) {
            this.quantidade = newQuantidade;
            this.cart.update();
        },
        enumerable: true,
        configurable: true
    });
    return ProdutoSelect;
}());
exports.ProdutoSelect = ProdutoSelect;
//# sourceMappingURL=cart.model.js.map