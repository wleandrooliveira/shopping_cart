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
var repository_1 = require("../models/repository");
var cart_model_1 = require("../models/cart.model");
var ProdutoListComponent = /** @class */ (function () {
    function ProdutoListComponent(repo, cart) {
        this.repo = repo;
        this.cart = cart;
    }
    Object.defineProperty(ProdutoListComponent.prototype, "produtos", {
        get: function () {
            if (this.repo.produtos != null && this.repo.produtos.length > 0) {
                var pageIndex = (this.repo.pagination.currentPagina - 1)
                    * this.repo.pagination.produtosPorPagina;
                return this.repo.produtos.slice(pageIndex, pageIndex + this.repo.pagination.produtosPorPagina);
            }
        },
        enumerable: true,
        configurable: true
    });
    ProdutoListComponent.prototype.addToCart = function (produto) {
        this.cart.addProduto(produto);
    };
    ProdutoListComponent = __decorate([
        core_1.Component({
            selector: "store-produto-list",
            templateUrl: "produtoList.component.html"
        }),
        __metadata("design:paramtypes", [repository_1.Repository, cart_model_1.Cart])
    ], ProdutoListComponent);
    return ProdutoListComponent;
}());
exports.ProdutoListComponent = ProdutoListComponent;
//# sourceMappingURL=produtoList.component.js.map