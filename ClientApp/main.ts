import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
}

const mainApplication = () => {
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
  mainApplication();
  } else {
  document.addEventListener("DOMContentLoaded", mainApplication);
}