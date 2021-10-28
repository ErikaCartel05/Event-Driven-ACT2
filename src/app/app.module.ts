import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { PorfolioComponent } from './portfolio/porfolio/porfolio.component';

@NgModule({
  declarations: [
    AppComponent,
    PorfolioComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
