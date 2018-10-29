"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Filter = /** @class */ (function () {
    function Filter() {
        this.related = false;
    }
    Filter.prototype.reset = function () {
        this.produto = this.search = null;
        this.related = false;
    };
    return Filter;
}());
exports.Filter = Filter;
var Pagination = /** @class */ (function () {
    function Pagination() {
        this.produtosPorPagina = 4;
        this.currentPagina = 1;
    }
    return Pagination;
}());
exports.Pagination = Pagination;
//# sourceMappingURL=configClasses.repository.js.map