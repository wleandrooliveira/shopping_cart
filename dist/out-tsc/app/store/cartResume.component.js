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
var cart_model_1 = require("../models/cart.model");
var CartResumeComponent = /** @class */ (function () {
    function CartResumeComponent(cart) {
        this.cart = cart;
    }
    Object.defineProperty(CartResumeComponent.prototype, "itemCount", {
        get: function () {
            return this.cart.itemCount;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CartResumeComponent.prototype, "totalPreco", {
        get: function () {
            return this.cart.totalPreco;
        },
        enumerable: true,
        configurable: true
    });
    CartResumeComponent = __decorate([
        core_1.Component({
            selector: "store-cartresume",
            templateUrl: "cartResume.component.html"
        }),
        __metadata("design:paramtypes", [cart_model_1.Cart])
    ], CartResumeComponent);
    return CartResumeComponent;
}());
exports.CartResumeComponent = CartResumeComponent;
//# sourceMappingURL=cartResume.component.js.map