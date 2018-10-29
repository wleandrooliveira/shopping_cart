import { AppModule } from './app/app.module';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { enableProdMode } from '@angular/core';

const bootApplication = () => {
    platformBrowserDynamic().bootstrapModule(AppModule);
}

if (module["hot"]) {
    module["hot"].accept();
    module["hot"].dispose(() => {
        const oldRootElem = document.querySelector("app-root");
        const newRootElem = document.createElement("app-root");
        oldRootElem.parentNode.insertBefore(newRootElem, oldRootElem);
        platformBrowserDynamic().destroy();
        });
    }
    if (document.readyState === "complete") {
    bootApplication();
    } else {
    document.addEventListener("DOMContentLoaded", bootApplication);
}