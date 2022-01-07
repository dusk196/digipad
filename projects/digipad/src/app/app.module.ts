import { DoBootstrap, Injector, NgModule } from '@angular/core';
import { createCustomElement } from '@angular/elements';
import { BrowserModule } from '@angular/platform-browser';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { EditorComponent } from './editor/editor.component';

@NgModule({
  declarations: [
    EditorComponent
  ],
  imports: [
    BrowserModule,
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [EditorComponent]
})
export class AppModule implements DoBootstrap {

  constructor(private injector: Injector) {
    const webComponent = createCustomElement(EditorComponent, { injector });
    customElements.define('digipad-editor', webComponent);
  }

  ngDoBootstrap() {
    console.info("Digipad initiated successfully as a web component ;)");
  }

}
