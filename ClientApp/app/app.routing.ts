import { Routes, RouterModule } from "@angular/router";
//import { ProdutoTabelaComponent } from "./estrutura/produtoTabela.component";
import { ProdutoDetailComponent } from "./estrutura/produtoDetail.component";
import { ProdutoSelectComponent } from "./store/produtoSelect.component";
import { CartDetailComponent } from "./store/cartDetail.component";
import { CheckoutDetailsComponent }
    from "./store/checkout/checkoutDetailsComponent";
import { CheckoutPaymentComponent }
    from "./store/checkout/checkoutPayment.component";
import { CheckoutResumeComponent }
    from "./store/checkout/checkoutResume.component";
import { OrderConfirmationComponent }
    from "./store/checkout/orderConfirmation.component";
import { AdminComponent } from "./admin/admin.component";
import { OverviewComponent } from "./admin/overview.component";
import { ProdutoAdminComponent } from "./admin/produtoAdmin.component";
import { OrderAdminComponent } from "./admin/orderAdmin.component";

import { AuthenticationGuard } from "./auth/authentication.guard";
import { AuthenticationComponent } from "./auth/authentication.component";


const routes: Routes = [
    { path: "login", component: AuthenticationComponent },
    { path: "admin", redirectTo: "/admin/overview", pathMatch: "full" },
    {
        path: "admin", component: AdminComponent,
        canActivateChild: [AuthenticationGuard],
        children: [
            { path: "produtos", component: ProdutoAdminComponent },
            { path: "orders", component: OrderAdminComponent },
            { path: "overview", component: OverviewComponent },
            { path: "", component: OverviewComponent }
        ]
    },
    { path: "checkout/step1", component: CheckoutDetailsComponent },
    { path: "checkout/step2", component: CheckoutPaymentComponent },
    { path: "checkout/step3", component: CheckoutResumeComponent },
    { path: "checkout/confirmation", component: OrderConfirmationComponent },
    { path: "cart", component: CartDetailComponent },
    { path: "store", component: ProdutoSelectComponent },
    { path: "", component: ProdutoSelectComponent }]

export const RoutingConfig = RouterModule.forRoot(routes);