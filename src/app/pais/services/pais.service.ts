import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PaisService {

  private apiURL : string = 'https://restcountries.com/v3.1/'


  constructor(private _http : HttpClient) { }

  buscarPais (termino : string) : Observable<any> {
    const url = `${this.apiURL}name/${termino}`;
    return this._http.get(url)
  }
}
