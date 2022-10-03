import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { HeroeComponent } from './heroe/heroe.component';
import { ListadoComponent } from './listado/listado.component';

@NgModule({
	declarations: [
		HeroeComponent,
		ListadoComponent
	],
	exports: [ //Lo que quiero que exportar para que se visualice desde afuera
		ListadoComponent
	],
	imports: [ //Se importan otros módulos que va a utilizar este módulo en si...
		CommonModule	//Módulo necesario para operaciones comunes de Angular (ej: ngFor, ngIf)
	]
})
export class HeroesModule { }