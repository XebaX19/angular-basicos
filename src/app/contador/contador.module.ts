import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { ContadorComponent } from './contador/contador.component';

@NgModule({
	declarations: [
        ContadorComponent
	],
	exports: [ //Lo que quiero que exportar para que se visualice desde afuera
        ContadorComponent
	],
	imports: [ //Se importan otros módulos que va a utilizar este módulo en si...
	]
})
export class ContadorModule { }