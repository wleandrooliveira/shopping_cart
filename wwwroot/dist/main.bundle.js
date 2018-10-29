webpackJsonp([1],{

/***/ 100:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__models_repository__ = __webpack_require__(18);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AppComponent = (function () {
    function AppComponent(repo) {
        this.repo = repo;
    }
    Object.defineProperty(AppComponent.prototype, "produto", {
        get: function () {
            return this.repo.produto;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppComponent.prototype, "produtos", {
        get: function () {
            return this.repo.produtos;
        },
        enumerable: true,
        configurable: true
    });
    AppComponent.prototype.createProduto = function () {
        //this.repo.createProduto(new Produto(0, "X-Ray Scuba Mask", "See what the fish are hiding", 49.99, this.repo.produtos[0].promocaoVendas));
        //this.repo.createProduto();
    };
    AppComponent.prototype.createProdutoAndPromocao = function () {
        //let s = new PromocaoVendas(0, "Leve 2 e pague 1", "Bola de Futebol", "3", '2018-10-28 00:00:00.0000000', "15");
        //let p = new Produto(0, "Bola de Futebol", "Bolha de futebol de couro", "50.00", s);
        //this.repo.createProdutoAndPromocaoVendas();
    };
    AppComponent.prototype.replaceProduto = function () {
        //this.repo.replaceProduto();
    };
    AppComponent.prototype.replacePromocaoVendas = function () {
        //this.repo.replacePromocaoVendas();
    };
    AppComponent.prototype.updateProduto = function () {
        //this.repo.updateProduto();
    };
    AppComponent.prototype.deleteProduto = function () {
    };
    AppComponent.prototype.deletePromocaoVendas = function () {
    };
    return AppComponent;
}());
AppComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_5" /* Component */])({
        selector: 'app-root',
        template: __webpack_require__(109),
        styles: [__webpack_require__(108)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__models_repository__["a" /* Repository */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__models_repository__["a" /* Repository */]) === "function" && _a || Object])
], AppComponent);

var _a;
//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 101:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(114);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(68);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_component__ = __webpack_require__(100);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__models_model_module__ = __webpack_require__(106);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__estrutura_produtoTabela_component__ = __webpack_require__(104);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__estrutura_produtoFilter_component__ = __webpack_require__(103);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__estrutura_produtoDetail_component__ = __webpack_require__(102);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};









var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["b" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */], __WEBPACK_IMPORTED_MODULE_6__estrutura_produtoTabela_component__["a" /* ProdutoTabelaComponent */], __WEBPACK_IMPORTED_MODULE_7__estrutura_produtoFilter_component__["a" /* ProdutoFilterComponent */], __WEBPACK_IMPORTED_MODULE_8__estrutura_produtoDetail_component__["a" /* ProdutoDetailComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_5__models_model_module__["a" /* ModelModule */]
        ],
        providers: [],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 102:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__models_repository__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(69);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProdutoDetailComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ProdutoDetailComponent = (function () {
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
    return ProdutoDetailComponent;
}());
ProdutoDetailComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_5" /* Component */])({
        selector: "produto-detail",
        template: __webpack_require__(110)
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__models_repository__["a" /* Repository */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__models_repository__["a" /* Repository */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* ActivatedRoute */]) === "function" && _c || Object])
], ProdutoDetailComponent);

var _a, _b, _c;
//# sourceMappingURL=produtoDetail.component.js.map

/***/ }),

/***/ 103:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__models_repository__ = __webpack_require__(18);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProdutoFilterComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ProdutoFilterComponent = (function () {
    function ProdutoFilterComponent(repo) {
        this.repo = repo;
        this.produto = "chess";
    }
    ProdutoFilterComponent.prototype.setProduto = function (produto) {
        this.repo.filter.produto = produto;
        this.repo.getProdutos();
    };
    return ProdutoFilterComponent;
}());
ProdutoFilterComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_5" /* Component */])({
        selector: "produto-filter",
        template: __webpack_require__(111)
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__models_repository__["a" /* Repository */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__models_repository__["a" /* Repository */]) === "function" && _a || Object])
], ProdutoFilterComponent);

var _a;
//# sourceMappingURL=produtoFilter.component.js.map

/***/ }),

/***/ 104:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__models_repository__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(69);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProdutoTabelaComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ProdutoTabelaComponent = (function () {
    function ProdutoTabelaComponent(repo, router) {
        this.repo = repo;
        this.router = router;
    }
    Object.defineProperty(ProdutoTabelaComponent.prototype, "produtos", {
        get: function () {
            return this.repo.produtos;
        },
        enumerable: true,
        configurable: true
    });
    ProdutoTabelaComponent.prototype.selectProduto = function (id) {
        this.repo.getProduto(id);
        this.router.navigateByUrl("/detalhe");
    };
    return ProdutoTabelaComponent;
}());
ProdutoTabelaComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_5" /* Component */])({
        selector: "produto-tabela",
        template: __webpack_require__(112)
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__models_repository__["a" /* Repository */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__models_repository__["a" /* Repository */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */]) === "function" && _b || Object])
], ProdutoTabelaComponent);

var _a, _b;
//# sourceMappingURL=produtoTabela.component.js.map

/***/ }),

/***/ 105:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Filter; });
var Filter = (function () {
    function Filter() {
        this.related = false;
    }
    Filter.prototype.reset = function () {
        this.produto = this.search = null;
        this.related = false;
    };
    return Filter;
}());

//# sourceMappingURL=configClasses.repository.js.map

/***/ }),

/***/ 106:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__repository__ = __webpack_require__(18);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ModelModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var ModelModule = (function () {
    function ModelModule() {
    }
    return ModelModule;
}());
ModelModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["b" /* NgModule */])({
        providers: [__WEBPACK_IMPORTED_MODULE_1__repository__["a" /* Repository */]]
    })
], ModelModule);

//# sourceMappingURL=model.module.js.map

/***/ }),

/***/ 107:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ 108:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(53)(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 109:
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n    <div class=\"row\">\r\n        <div class=\"col\">\r\n            <produto-filter></produto-filter>\r\n            <produto-tabela></produto-tabela>\r\n        </div>\r\n        <div class=\"col\">\r\n            <produto-detail></produto-detail>\r\n        </div>\r\n    </div>\r\n</div>\r\n\r\n\r\n"

/***/ }),

/***/ 110:
/***/ (function(module, exports) {

module.exports = "<table class=\"table table-striped\">\r\n    <tr><th colspan=\"2\" class=\"bg-info\">Produto</th></tr>\r\n    <tr><th>Nome</th><td>{{produto?.nome || 'No Data'}}</td></tr>\r\n    <tr>\r\n        <th>Descricao</th>\r\n        <td>{{produto?.descricao || 'No Data'}}</td>\r\n    </tr>\r\n    <tr><th>Preco</th><td>{{produto?.preco  || 'No Data'}}</td></tr>\r\n    <tr><th colspan=\"2\" class=\"bg-info\">Promocao Vendas</th></tr>\r\n    <tr><th>Descricao_promocao</th><td>{{produto?.PromocaoVendas?.Dscricao_promocao}}</td></tr>\r\n    <tr><th>Produto</th><td>{{produto?.PromocaoVendas?.Produto}}</td></tr>\r\n    <tr><th>Quantidade_Minima</th><td>{{produto?.PromocaoVendas?.Quantidade_Minima}}</td></tr>\r\n    <tr><th>Data_validade</th><td>{{produto?.PromocaoVendas?.Data_validade}}</td></tr>\r\n    <tr><th>Desconto</th><td>{{produto?.PromocaoVendas?.Desconto}}</td></tr>\r\n</table>\r\n<div class=\"text-center\">\r\n    <button class=\"btn btn-primary\" routerLink=\"/tabela\">Voltar</button>\r\n</div>"

/***/ }),

/***/ 111:
/***/ (function(module, exports) {

module.exports = "<div class=\"m-1\">\r\n        <button class=\"btn btn-primary\" (click)=\"setProduto('soccer')\">Soccer Ball</button>\r\n        <button class=\"btn btn-primary\" (click)=\"setProduto(produto)\">\r\n            Chess\r\n        </button>\r\n        <button class=\"btn btn-primary\"\r\n            (click)=\"setProduto('Water' + 'Sports')\">Watersports</button>\r\n        <button class=\"btn btn-primary\" (click)=\"setProduto(null)\">Todos</button>\r\n    </div>"

/***/ }),

/***/ 112:
/***/ (function(module, exports) {

module.exports = "<table class=\"table table-striped\">\r\n    <tr><th>Nome</th><th>Descricao</th><th>Preco</th><th></th></tr>\r\n    <tr *ngFor=\"let produto of produtos\">\r\n        <td>{{produto.nome}}</td>\r\n        <td>{{produto.descricao}}</td>\r\n        <td>{{produto.preco}}</td>\r\n        <td>\r\n            <button class=\"btn btn-primary btn-sm\"\r\n                [routerLink]= \"['/detalhe', produto.produtoId]\">\r\n                Detalhe\r\n            </button>\r\n        </td>\r\n    </tr>\r\n</table>"

/***/ }),

/***/ 18:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(68);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(179);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__configClasses_repository__ = __webpack_require__(105);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Repository; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var produtosUrl = "/api/produtos";
var promocaovendasUrl = "/api/promocaovendas";
var Repository = (function () {
    function Repository(http) {
        this.http = http;
        this.filterObject = new __WEBPACK_IMPORTED_MODULE_3__configClasses_repository__["a" /* Filter */]();
        this.promocaovendas = [];
        //this.filter.produto = "Kayak";
        this.filter.related = true;
        this.getProdutos(true);
    }
    Repository.prototype.getProduto = function (id) {
        var _this = this;
        this.sendRequest(__WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* RequestMethod */].Get, produtosUrl + "/" + id)
            .subscribe(function (response) {
            _this.produto = response.json;
        });
    };
    Repository.prototype.sendRequest = function (verb, url, data) {
        return this.http.request(new __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Request */]({
            method: verb, url: url, body: data
        })).map(function (response) {
            return response.headers.get("Content-Length") != "0"
                ? response.json() : null;
        });
    };
    Repository.prototype.getProdutos = function (related) {
        var _this = this;
        if (related === void 0) { related = false; }
        var url = produtosUrl + "?related=" + this.filter.related;
        if (this.filter.produto) {
            url += "&produto=" + this.filter.produto;
        }
        this.sendRequest(__WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* RequestMethod */].Get, produtosUrl + "?related=" + related)
            .subscribe(function (response) { return _this.produtos = response; });
    };
    Repository.prototype.getPromocaoVendas = function () {
        var _this = this;
        this.sendRequest(__WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* RequestMethod */].Get, promocaovendasUrl)
            .subscribe(function (response) { return _this.promocaovendas = response; });
    };
    Repository.prototype.createProduto = function (prod) {
        var _this = this;
        var data = {
            nome: prod.nome, descricao: prod.descricao,
            preco: prod.preco, promocaovendas: prod.promocaoVendas ? prod.promocaoVendas.promocaoVendasId : 0
        };
        this.sendRequest(__WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* RequestMethod */].Post, produtosUrl, data)
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
        this.sendRequest(__WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* RequestMethod */].Post, promocaovendasUrl, data)
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
        this.sendRequest(__WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* RequestMethod */].Put, produtosUrl + "/" + prod.produtoId, data)
            .subscribe(function (response) { return _this.getProdutos(); });
    };
    Repository.prototype.replacePromocaoVendas = function (promo) {
        var _this = this;
        var data = {
            descricao_promocao: promo.descricao_promocao, produto: promo.produto, quantidade: promo.quantidade_Minima,
            data_validade: promo.data_validade, desconto: promo.desconto
        };
        this.sendRequest(__WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* RequestMethod */].Put, promocaovendasUrl + "/" + promo.promocaoVendasId, data)
            .subscribe(function (response) { return _this.getProdutos(); });
    };
    Repository.prototype.updateProduto = function (id, changes) {
        var _this = this;
        var patch = [];
        changes.forEach(function (value, key) {
            return patch.push({ op: "replace", path: key, value: value });
        });
        this.sendRequest(__WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* RequestMethod */].Patch, produtosUrl + "/" + id, patch)
            .subscribe(function (response) { return _this.getProdutos(); });
    };
    Repository.prototype.deleteProduto = function (id) {
        var _this = this;
        this.sendRequest(__WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* RequestMethod */].Delete, produtosUrl + "/" + id)
            .subscribe(function (response) { return _this.getProdutos(); });
    };
    Repository.prototype.deletePromocaoVendas = function (id) {
        var _this = this;
        this.sendRequest(__WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* RequestMethod */].Delete, promocaovendasUrl + "/" + id)
            .subscribe(function (response) {
            _this.getProdutos();
            _this.getPromocaoVendas();
        });
    };
    Object.defineProperty(Repository.prototype, "filter", {
        get: function () {
            return this.filterObject;
        },
        enumerable: true,
        configurable: true
    });
    return Repository;
}());
Repository = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* Http */]) === "function" && _a || Object])
], Repository);

var _a;
//# sourceMappingURL=repository.js.map

/***/ }),

/***/ 227:
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(17);
module.exports = __webpack_require__(97);


/***/ }),

/***/ 67:
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 67;

/***/ }),

/***/ 97:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__(115);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__(101);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__(107);




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["a" /* enableProdMode */])();
}
var mainApplication = function () {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
};
if (true) {
    module["hot"].accept();
    module["hot"].dispose(function () {
        var oldRootElem = document.querySelector("app-root");
        var newRootElem = document.createElement("app-root");
        oldRootElem.parentNode.insertBefore(newRootElem, oldRootElem);
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().destroy();
    });
}
if (document.readyState === "complete") {
    mainApplication();
}
else {
    document.addEventListener("DOMContentLoaded", mainApplication);
}
//# sourceMappingURL=main.js.map

/***/ })

},[227]);
//# sourceMappingURL=main.bundle.js.map