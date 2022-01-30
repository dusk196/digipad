import { Injector, NgModule } from '@angular/core';
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

export class AppModule {

  constructor(private injector: Injector) {
    const webComponent = createCustomElement(EditorComponent, { injector });
    customElements.define('app-digipad', webComponent);
  }

}
