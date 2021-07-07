import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Observable, of } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';

import { Country } from '../interfaces/pais.interface';

@Injectable({
  providedIn: 'root'
})
export class PaisService {

  private apiUrl: string = 'https://restcountries.eu/rest/v2';
  
  get httpParams() {
    return new HttpParams()
    .set('fields', '?fields=name;capital;alpha2code;flag;population');
  }

  constructor( private http: HttpClient ) { }

  buscarPais( termino: string, byWhat: string): Observable<Country[]> {
    const url = `${ this.apiUrl }/${ byWhat }/${ termino }?fields=name;capital;alpha2Code;flag;population`;

    return this.http.get<Country[]>( url, { params: this.httpParams } );
                // .pipe(
                //   catchError( err => of([]))
                // ); //atrapa el error y retorna un arreglo vacío(un nuevo obserbable)
                    //mediante el operator catchError
  }
  getPaisPorAlpha( id: string): Observable<Country> {
    const url = `${ this.apiUrl }/alpha/${ id }`;

    return this.http.get<Country>( url, {params: this.httpParams} );
  }

  buscarRegion( region: string): Observable<Country[]> {
    
    
    const url = `${ this.apiUrl }/region/${ region }`;

    return this.http.get<Country[]>( url, { params: this.httpParams } )
              .pipe(
                tap( console.log )
              );
  }
  
}
