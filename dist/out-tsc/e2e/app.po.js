"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var protractor_1 = require("protractor");
var ShoppingCartPage = /** @class */ (function () {
    function ShoppingCartPage() {
    }
    ShoppingCartPage.prototype.navigateTo = function () {
        return protractor_1.browser.get('/');
    };
    ShoppingCartPage.prototype.getParagraphText = function () {
        return protractor_1.element(protractor_1.by.css('app-root h1')).getText();
    };
    return ShoppingCartPage;
}());
exports.ShoppingCartPage = ShoppingCartPage;
//# sourceMappingURL=app.po.js.map