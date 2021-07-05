import { Component } from '@angular/core';

import { Country } from '../../interfaces/pais.interface';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-por-pais',
  templateUrl: './por-pais.component.html',
  styles: [
  ]
})
export class PorPaisComponent{

  termino: string = '';
  hayError: boolean = false;
  hayPaises: boolean = false;
  paises: Country[] = [];
  
  constructor( private paisService: PaisService) { }


  buscar() {
    this.hayError = false; 
    console.log(this.termino);

    this.paisService.buscarPais( this.termino )
        .subscribe( ( paises ) => {
          if(paises.length !== 0){  
            this.paises = paises;
            this.hayPaises = true;
          }else{
            this.hayPaises = false;
          }
          console.log( paises );
        }, (err) => {
          this.hayError = true;
          this.paises = [];
        });
  }
}
