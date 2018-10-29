import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser"
import { RouterModule } from "@angular/router";
import { FormsModule } from "@angular/forms";
import { AdminComponent } from "./admin.component";
import { OverviewComponent } from "./overview.component";
import { ProdutoAdminComponent } from "./produtoAdmin.component";
import { OrderAdminComponent } from "./orderAdmin.component";
import { ProdutoEditorComponent } from "./produtoEditor.component";


@NgModule({
    imports: [BrowserModule, RouterModule, FormsModule],
    declarations: [AdminComponent, OverviewComponent,
        ProdutoAdminComponent, OrderAdminComponent, ProdutoEditorComponent]
})
export class AdminModule { }