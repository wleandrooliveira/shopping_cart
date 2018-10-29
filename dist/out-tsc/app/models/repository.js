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
var http_1 = require("@angular/http");
require("rxjs/add/operator/map");
var configClasses_repository_1 = require("./configClasses.repository");
var errorHandler_service_1 = require("../errorHandler.service");
require("rxjs/add/operator/catch");
var produtosUrl = "/api/produtos";
var promocaovendasUrl = "/api/promocaovendas";
var ordersUrl = "/api/orders";
var Repository = /** @class */ (function () {
    function Repository(http) {
        this.http = http;
        this.filterObject = new configClasses_repository_1.Filter();
        this.paginationObject = new configClasses_repository_1.Pagination();
        this.promocaovendas = [];
        this.produtosearch = [];
        this.orders = [];
        //this.filter.produto = "Kayak";
        this.filter.related = true;
        this.getProdutos(true);
    }
    Repository.prototype.getProduto = function (id) {
        var _this = this;
        this.sendRequest(http_1.RequestMethod.Get, produtosUrl + "/" + id)
            .subscribe(function (response) {
            _this.produto = response.json;
        });
    };
    Repository.prototype.sendRequest = function (verb, url, data) {
        return this.http.request(new http_1.Request({
            method: verb, url: url, body: data
        })).map(function (response) {
            return response.headers.get("Content-Length") != "0"
                ? response.json() : null;
        })
            .catch(function (errorResponse) {
            if (errorResponse.status == 400) {
                var jsonData_1;
                try {
                    jsonData_1 = errorResponse.json();
                }
                catch (e) {
                    throw new Error("NetWork Error");
                }
                var messages = Object.getOwnPropertyNames(jsonData_1)
                    .map(function (p) { return jsonData_1[p]; });
                throw new errorHandler_service_1.ValidationError(messages);
            }
            throw new Error("Network Error");
        });
    };
    Repository.prototype.getProdutos = function (related) {
        var _this = this;
        if (related === void 0) { related = false; }
        var url = produtosUrl + "?related=" + this.filter.related;
        if (this.filter.produto) {
            url += "&produtosearch=" + this.filter.produto;
        }
        if (this.filter.search) {
            url += "&search=" + this.filter.search;
        }
        url += "&metadata=true";
        this.sendRequest(http_1.RequestMethod.Get, url)
            .subscribe(function (response) {
            _this.produtos = response.data;
            _this.produto = response.produto;
            _this.pagination.currentPagina = 1;
        });
    };
    Repository.prototype.getPromocaoVendas = function () {
        var _this = this;
        this.sendRequest(http_1.RequestMethod.Get, promocaovendasUrl)
            .subscribe(function (response) { return _this.promocaovendas = response; });
    };
    Repository.prototype.createProduto = function (prod) {
        var _this = this;
        var data = {
            nome: prod.nome, descricao: prod.descricao,
            preco: prod.preco, promocaovendas: prod.promocaoVendas ? prod.promocaoVendas.promocaoVendasId : 0
        };
        this.sendRequest(http_1.RequestMethod.Post, produtosUrl, data)
            .subscribe(function (response) {
            prod.produtoId = response;
            _this.produtos.push(prod);
        });
    };
    Repository.prototype.createProdutoAndPromocaoVendas = function (prod, promo) {
        var _this = this;
        var data = {
            descricao_promocao: promo.descricao_promocao, produto: promo.produto, quantidade: promo.quantidade_Minima,
            data_validade: promo.data_validade, desconto: promo.desconto
        };
        this.sendRequest(http_1.RequestMethod.Post, promocaovendasUrl, data)
            .subscribe(function (response) {
            promo.promocaoVendasId = response;
            prod.promocaoVendas = promo;
            _this.promocaovendas.push(promo);
            if (prod != null) {
                _this.createProduto(prod);
            }
        });
    };
    Repository.prototype.replaceProduto = function (prod) {
        var _this = this;
        var data = {
            nome: prod.nome, description: prod.descricao, preco: prod.preco,
            promocaoVendas: prod.promocaoVendas ? prod.promocaoVendas.promocaoVendasId : 0
        };
        this.sendRequest(http_1.RequestMethod.Put, produtosUrl + "/" + prod.produtoId, data)
            .subscribe(function (response) { return _this.getProdutos(); });
    };
    Repository.prototype.replacePromocaoVendas = function (promo) {
        var _this = this;
        var data = {
            descricao_promocao: promo.descricao_promocao, produto: promo.produto, quantidade: promo.quantidade_Minima,
            data_validade: promo.data_validade, desconto: promo.desconto
        };
        this.sendRequest(http_1.RequestMethod.Put, promocaovendasUrl + "/" + promo.promocaoVendasId, data)
            .subscribe(function (response) { return _this.getProdutos(); });
    };
    Repository.prototype.updateProduto = function (id, changes) {
        var _this = this;
        var patch = [];
        changes.forEach(function (value, key) {
            return patch.push({ op: "replace", path: key, value: value });
        });
        this.sendRequest(http_1.RequestMethod.Patch, produtosUrl + "/" + id, patch)
            .subscribe(function (response) { return _this.getProdutos(); });
    };
    Repository.prototype.deleteProduto = function (id) {
        var _this = this;
        this.sendRequest(http_1.RequestMethod.Delete, produtosUrl + "/" + id)
            .subscribe(function (response) { return _this.getProdutos(); });
    };
    Repository.prototype.deletePromocaoVendas = function (id) {
        var _this = this;
        this.sendRequest(http_1.RequestMethod.Delete, promocaovendasUrl + "/" + id)
            .subscribe(function (response) {
            _this.getProdutos();
            _this.getPromocaoVendas();
        });
    };
    Repository.prototype.getOrders = function () {
        var _this = this;
        this.sendRequest(http_1.RequestMethod.Get, ordersUrl)
            .subscribe(function (data) { return _this.orders = data; });
    };
    Repository.prototype.createOrder = function (order) {
        this.sendRequest(http_1.RequestMethod.Post, ordersUrl, {
            name: order.name,
            address: order.address,
            payment: order.payment,
            products: order.products
        }).subscribe(function (data) {
            order.orderConfirmation = data;
            order.cart.clear();
            order.clear();
        });
    };
    Repository.prototype.shipOrder = function (order) {
        var _this = this;
        this.sendRequest(http_1.RequestMethod.Post, ordersUrl + "/" + order.orderId)
            .subscribe(function (r) { return _this.getOrders(); });
    };
    Repository.prototype.login = function (name, password) {
        return this.http.post("/api/account/login", { name: name, password: password });
    };
    Repository.prototype.logout = function () {
        this.http.post("/api/account/logout", null).subscribe(function (respone) { });
    };
    Object.defineProperty(Repository.prototype, "filter", {
        get: function () {
            return this.filterObject;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Repository.prototype, "pagination", {
        get: function () {
            return this.paginationObject;
        },
        enumerable: true,
        configurable: true
    });
    Repository.prototype.storeSessionData = function (dataType, data) {
        return this.sendRequest(http_1.RequestMethod.Post, "/api/session/" + dataType, data)
            .subscribe(function (response) { });
    };
    Repository.prototype.getSessionData = function (dataType) {
        return this.sendRequest(http_1.RequestMethod.Get, "/api/session/" + dataType);
    };
    Repository = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [http_1.Http])
    ], Repository);
    return Repository;
}());
exports.Repository = Repository;
//# sourceMappingURL=repository.js.map