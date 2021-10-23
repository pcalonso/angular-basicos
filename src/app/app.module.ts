//este es el modulo principal
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ContadorComponent } from './contador/contador.component';
import { HeroesModule } from './heroes/heroes.module';


@NgModule({
  //decorador
  declarations: [
    AppComponent,
    //ContadorComponent,
   
  ],
  imports: [
    //modulos
    BrowserModule,
    HeroesModule
  ],
  providers: [],
  //servicios
  bootstrap: [AppComponent]
  //porque es el componente principal
})
export class AppModule { }
