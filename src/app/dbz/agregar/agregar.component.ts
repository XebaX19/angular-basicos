import { Component, EventEmitter, Input, Output } from '@angular/core';

import { Personaje } from '../interfaces/dbz.interface';

import { DbzService } from '../services/dbz.service';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html'
})
export class AgregarComponent {

  constructor(private dbzService: DbzService) { }

  //Con el @Input() le decimos que la propiedad viene del componente padre
  @Input() nuevo: Personaje = {
    nombre: '',
    poder: 0
  }

  //Con el @Output() emitimos un valor desde el componente hijo, al componente padre
  //@Output() onNuevoPersonaje: EventEmitter<Personaje> = new EventEmitter();

  agregar() {
    if (this.nuevo.nombre.trim().length === 0) {
      return;
    }

    //this.onNuevoPersonaje.emit(this.nuevo); //Emitimos el nuevo personaje al componente padre
    this.dbzService.agregarPersonaje(this.nuevo);
    
    this.nuevo = {
      nombre: '',
      poder: 0
    };
  }
}