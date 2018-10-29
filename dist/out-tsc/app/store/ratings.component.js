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
var Produto_model_1 = require("../models/Produto.model");
var RatingsComponent = /** @class */ (function () {
    function RatingsComponent() {
    }
    Object.defineProperty(RatingsComponent.prototype, "stars", {
        get: function () {
            if (this.produto != null && this.produto.classificacao != null) {
                var total = this.produto.classificacao.map(function (r) { return r.stars; })
                    .reduce(function (prev, curr) { return prev + curr; }, 0);
                var count_1 = Math.round(total / this.produto.classificacao.length);
                return Array(5).fill(false).map(function (value, index) {
                    return index < count_1;
                });
            }
            else {
                return [];
            }
        },
        enumerable: true,
        configurable: true
    });
    __decorate([
        core_1.Input(),
        __metadata("design:type", Produto_model_1.Produto)
    ], RatingsComponent.prototype, "produto", void 0);
    RatingsComponent = __decorate([
        core_1.Component({
            selector: "store-ratings",
            templateUrl: "ratings.component.html"
        })
    ], RatingsComponent);
    return RatingsComponent;
}());
exports.RatingsComponent = RatingsComponent;
//# sourceMappingURL=ratings.component.js.map