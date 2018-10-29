import { NgModule } from "@angular/core";
import { BrowserModule } from '@angular/platform-browser';
import { CartResumeComponent } from "./cartResume.component";
import { ProdutoFilterComponent } from "./produto.Filter.component";
import { PaginationComponent } from "./pagination.component";
import { ProdutoListComponent } from "./produtoList.component";
import { RatingsComponent } from "./ratings.component";
import { ProdutoSelectComponent } from "./produtoSelect.component";
import { CartDetailComponent } from "./cartDetail.component";
import { RouterModule } from "@angular/router";
import { FormsModule } from "@angular/forms";
import { CheckoutDetailsComponent } from "./checkout/checkoutDetailsComponent";
import { CheckoutPaymentComponent } from "./checkout/checkoutPayment.component";
import { CheckoutResumeComponent } from "./checkout/checkoutResume.component";
import { OrderConfirmationComponent } from "./checkout/orderConfirmation.component";


@NgModule({
    declarations: [CartResumeComponent, ProdutoFilterComponent,
        PaginationComponent, ProdutoListComponent, RatingsComponent,
        ProdutoSelectComponent, CartDetailComponent,
        CheckoutDetailsComponent, CheckoutPaymentComponent,
        CheckoutResumeComponent, OrderConfirmationComponent
    ],
    imports: [BrowserModule, RouterModule, FormsModule],
    exports: [ProdutoSelectComponent]
})
export class StoreModule { }