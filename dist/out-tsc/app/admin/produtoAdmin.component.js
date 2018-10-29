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
var produto_model_1 = require("../models/produto.model");
var ProdutoAdminComponent = /** @class */ (function () {
    function ProdutoAdminComponent(repo) {
        this.repo = repo;
        this.tableMode = true;
    }
    Object.defineProperty(ProdutoAdminComponent.prototype, "produto", {
        get: function () {
            return this.repo.produto;
        },
        enumerable: true,
        configurable: true
    });
    ProdutoAdminComponent.prototype.selectProduto = function (id) {
        this.repo.getProduto(id);
    };
    ProdutoAdminComponent.prototype.saveProduto = function () {
        if (this.repo.produto.produtoId == null) {
            this.repo.createProduto(this.repo.produto);
        }
        else {
            this.repo.replaceProduto(this.repo.produto);
        }
        this.clearProduto();
        this.tableMode = true;
    };
    ProdutoAdminComponent.prototype.deleteProduct = function (id) {
        this.repo.deleteProduto(id);
    };
    ProdutoAdminComponent.prototype.clearProduto = function () {
        this.repo.produto = new produto_model_1.Produto();
        this.tableMode = true;
    };
    Object.defineProperty(ProdutoAdminComponent.prototype, "produtos", {
        get: function () {
            return this.repo.produtos;
        },
        enumerable: true,
        configurable: true
    });
    ProdutoAdminComponent = __decorate([
        core_1.Component({
            templateUrl: "produtoAdmin.component.html"
        }),
        __metadata("design:paramtypes", [repository_1.Repository])
    ], ProdutoAdminComponent);
    return ProdutoAdminComponent;
}());
exports.ProdutoAdminComponent = ProdutoAdminComponent;
//# sourceMappingURL=produtoAdmin.component.js.map