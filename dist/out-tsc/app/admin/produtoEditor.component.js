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
var ProdutoEditorComponent = /** @class */ (function () {
    function ProdutoEditorComponent(repo) {
        this.repo = repo;
    }
    Object.defineProperty(ProdutoEditorComponent.prototype, "produto", {
        get: function () {
            return this.repo.produto;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ProdutoEditorComponent.prototype, "PromocaoVendas", {
        get: function () {
            return this.repo.promocaovendas;
        },
        enumerable: true,
        configurable: true
    });
    ProdutoEditorComponent.prototype.comparePromocaoVendas = function (s1, s2) {
        return s1 && s2 && s1.produto == s2.produto;
    };
    ProdutoEditorComponent = __decorate([
        core_1.Component({
            selector: "admin-product-editor",
            templateUrl: "productEditor.component.html"
        }),
        __metadata("design:paramtypes", [repository_1.Repository])
    ], ProdutoEditorComponent);
    return ProdutoEditorComponent;
}());
exports.ProdutoEditorComponent = ProdutoEditorComponent;
//# sourceMappingURL=produtoEditor.component.js.map