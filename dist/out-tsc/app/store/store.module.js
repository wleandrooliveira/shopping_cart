"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var platform_browser_1 = require("@angular/platform-browser");
var cartResume_component_1 = require("./cartResume.component");
var produto_Filter_component_1 = require("./produto.Filter.component");
var pagination_component_1 = require("./pagination.component");
var produtoList_component_1 = require("./produtoList.component");
var ratings_component_1 = require("./ratings.component");
var produtoSelect_component_1 = require("./produtoSelect.component");
var cartDetail_component_1 = require("./cartDetail.component");
var router_1 = require("@angular/router");
var forms_1 = require("@angular/forms");
var checkoutDetailsComponent_1 = require("./checkout/checkoutDetailsComponent");
var checkoutPayment_component_1 = require("./checkout/checkoutPayment.component");
var checkoutResume_component_1 = require("./checkout/checkoutResume.component");
var orderConfirmation_component_1 = require("./checkout/orderConfirmation.component");
var StoreModule = /** @class */ (function () {
    function StoreModule() {
    }
    StoreModule = __decorate([
        core_1.NgModule({
            declarations: [cartResume_component_1.CartResumeComponent, produto_Filter_component_1.ProdutoFilterComponent,
                pagination_component_1.PaginationComponent, produtoList_component_1.ProdutoListComponent, ratings_component_1.RatingsComponent,
                produtoSelect_component_1.ProdutoSelectComponent, cartDetail_component_1.CartDetailComponent,
                checkoutDetailsComponent_1.CheckoutDetailsComponent, checkoutPayment_component_1.CheckoutPaymentComponent,
                checkoutResume_component_1.CheckoutResumeComponent, orderConfirmation_component_1.OrderConfirmationComponent
            ],
            imports: [platform_browser_1.BrowserModule, router_1.RouterModule, forms_1.FormsModule],
            exports: [produtoSelect_component_1.ProdutoSelectComponent]
        })
    ], StoreModule);
    return StoreModule;
}());
exports.StoreModule = StoreModule;
//# sourceMappingURL=store.module.js.map