import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ICountry } from '../interfaces/pais.interface';

@Injectable({
  providedIn: 'root'
})
export class PaisService {

  private apiURL : string = 'https://restcountries.com/v3.1/'


  constructor(private _http : HttpClient) { }

  buscarPais (termino : string) : Observable<ICountry[]> {
    const url = `${this.apiURL}name/${termino}`;
    return this._http.get<ICountry[]>(url)
  }

  buscarCapital ( termino : string) : Observable<ICountry[]>{
    const url = `${ this.apiURL }capital/${ termino }`;
    return this._http.get<ICountry[]>(url);
  }

  buscarRegion ( termino : string) : Observable<ICountry[]>{
    const url = `${ this.apiURL }region/${ termino }`;
    return this._http.get<ICountry[]>(url);
  }

  getPaisPorCodigo (code : string) : Observable<ICountry[]> {
    const url = `${ this.apiURL }alpha/${ code }`;
    return this._http.get<ICountry[]>(url);
  }
}
