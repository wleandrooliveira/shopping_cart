import { Component } from '@angular/core';
import { Repository } from "./models/repository";
import { Produto } from "./models/produto.model";
import { PromocaoVendas } from "./models/PromocaoVendas.model";
import { ErrorHandlerService } from "./errorHandler.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

    private lastError: string[];
    constructor(errorHandler: ErrorHandlerService) {
        errorHandler.errors.subscribe(error => {
            this.lastError = error;
        });
    }
    get error(): string[] {
        return this.lastError;
    }
    clearError() {
        this.lastError = null;
    }

}
