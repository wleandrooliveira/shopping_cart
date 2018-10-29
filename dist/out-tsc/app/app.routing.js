"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var router_1 = require("@angular/router");
var produtoSelect_component_1 = require("./store/produtoSelect.component");
var cartDetail_component_1 = require("./store/cartDetail.component");
var checkoutDetailsComponent_1 = require("./store/checkout/checkoutDetailsComponent");
var checkoutPayment_component_1 = require("./store/checkout/checkoutPayment.component");
var checkoutResume_component_1 = require("./store/checkout/checkoutResume.component");
var orderConfirmation_component_1 = require("./store/checkout/orderConfirmation.component");
var admin_component_1 = require("./admin/admin.component");
var overview_component_1 = require("./admin/overview.component");
var produtoAdmin_component_1 = require("./admin/produtoAdmin.component");
var orderAdmin_component_1 = require("./admin/orderAdmin.component");
var authentication_guard_1 = require("./auth/authentication.guard");
var authentication_component_1 = require("./auth/authentication.component");
var routes = [
    { path: "login", component: authentication_component_1.AuthenticationComponent },
    { path: "admin", redirectTo: "/admin/overview", pathMatch: "full" },
    {
        path: "admin", component: admin_component_1.AdminComponent,
        canActivateChild: [authentication_guard_1.AuthenticationGuard],
        children: [
            { path: "produtos", component: produtoAdmin_component_1.ProdutoAdminComponent },
            { path: "orders", component: orderAdmin_component_1.OrderAdminComponent },
            { path: "overview", component: overview_component_1.OverviewComponent },
            { path: "", component: overview_component_1.OverviewComponent }
        ]
    },
    { path: "checkout/step1", component: checkoutDetailsComponent_1.CheckoutDetailsComponent },
    { path: "checkout/step2", component: checkoutPayment_component_1.CheckoutPaymentComponent },
    { path: "checkout/step3", component: checkoutResume_component_1.CheckoutResumeComponent },
    { path: "checkout/confirmation", component: orderConfirmation_component_1.OrderConfirmationComponent },
    { path: "cart", component: cartDetail_component_1.CartDetailComponent },
    { path: "store", component: produtoSelect_component_1.ProdutoSelectComponent },
    { path: "", component: produtoSelect_component_1.ProdutoSelectComponent }
];
exports.RoutingConfig = router_1.RouterModule.forRoot(routes);
//# sourceMappingURL=app.routing.js.map