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
var router_1 = require("@angular/router");
var ProdutoDetailComponent = /** @class */ (function () {
    function ProdutoDetailComponent(repo, router, activeRoute) {
        this.repo = repo;
        var id = Number.parseInt(activeRoute.snapshot.params["id"]);
        if (id) {
            this.repo.getProduto(id);
        }
        else {
            router.navigateByUrl("/");
        }
    }
    Object.defineProperty(ProdutoDetailComponent.prototype, "product", {
        get: function () {
            return this.repo.produto;
        },
        enumerable: true,
        configurable: true
    });
    ProdutoDetailComponent = __decorate([
        core_1.Component({
            selector: "produto-detail",
            templateUrl: "produtoDetail.component.html"
        }),
        __metadata("design:paramtypes", [repository_1.Repository,
            router_1.Router,
            router_1.ActivatedRoute])
    ], ProdutoDetailComponent);
    return ProdutoDetailComponent;
}());
exports.ProdutoDetailComponent = ProdutoDetailComponent;
//# sourceMappingURL=produtoDetail.component.js.map