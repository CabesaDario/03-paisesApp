import { Component, Input } from '@angular/core'; 

import { Country } from '../../interfaces/pais.interface';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-por-pais',
  templateUrl: './por-capital.component.html',
  styles: [
  ]
})
export class PorCapitalComponent{

  termino: string = '';
  hayError: boolean = false;
  hayPaises: boolean = false;
  paises: Country[] = [];
  
  constructor( private paisService: PaisService) { }


  buscar( termino: string) {
    
    this.hayError = false; 
    this.termino = termino;

    this.paisService.buscarPais( this.termino, 'capital' )
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

