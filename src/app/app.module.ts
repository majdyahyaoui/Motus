import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GrilleComponent } from './grille/grille.component';
import { Bloc4Component } from './bloc4/bloc4.component';
import { Bloc1Component } from './bloc1/bloc1.component';
import { Bloc2Component } from './bloc2/bloc2.component';
import { Bloc3Component } from './bloc3/bloc3.component';
import { Bloc5Component } from './bloc5/bloc5.component';
import { AlphabetComponent } from './alphabet/alphabet.component';

@NgModule({
  declarations: [
    AppComponent,
    GrilleComponent,
    Bloc4Component,
    Bloc1Component,
    Bloc2Component,
    Bloc3Component,
    Bloc5Component,
    AlphabetComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
