import { Component } from '@angular/core';

import { Personaje } from '../interfaces/dbz.interface';

import { DbzService } from '../services/dbz.service';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html'
})
export class MainPageComponent {
  //Se define la propiedad dbzService: es una inyección de dependencias ;)
  //Se inyecta el servicio en el constructor.
  //El servicio es Singleton, si se vuelve a intentar generar en otro componente, reutiliza el mismo que ya se genero aquí
  //constructor( private dbzService: DbzService ) { }

  constructor() { }

  nuevo: Personaje = {
    nombre: 'Maestro Roshi',
    poder: 1000
  }
}
