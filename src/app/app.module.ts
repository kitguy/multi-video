import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Injector } from '@angular/core';
import { createCustomElement } from '@angular/elements';

import { VideosComponent } from './videos.component';

@NgModule({
  declarations: [
    VideosComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  entryComponents: [VideosComponent]
})
export class AppModule {
  constructor(private injector: Injector) {
    const el = createCustomElement(VideosComponent, { injector });
    customElements.define('multi-video', el);
  }

  ngDoBootstrap() { }
}
