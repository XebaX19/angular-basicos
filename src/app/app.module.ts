import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ContadorModule } from './contador/contador.module';
import { HeroesModule } from './heroes/heroes.module';


@NgModule({
  declarations: [ //Acá se definen los componentes
    AppComponent
  ],
  imports: [ //Acá se definen otros módulos
    BrowserModule,
    HeroesModule,
    ContadorModule
  ],
  providers: [], //Servicios específicos a un módulo
  bootstrap: [AppComponent] //Define al componente principal
})
export class AppModule { }
