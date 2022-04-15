import { Component } from '@angular/core';
import { PaisService } from '../../services/pais.service';
import { ICountry } from '../../interfaces/pais.interface';

@Component({
  selector: 'app-por-pais',
  templateUrl: './por-pais.component.html',
  styles: [
  ]
})
export class PorPaisComponent {

termino : string = '';
isError : boolean = false;
countryList : ICountry[] = [];

  constructor(private _paisService : PaisService) { }

  buscar(){
    console.log(this.termino);
    this.isError = false;

    this._paisService.buscarPais(this.termino)
        .subscribe( resp => {
          console.log(resp);
          this.countryList = resp;
          console.log(this.countryList);



        }, error => {
          console.log(error);
          this.isError = true;
          this.countryList = []

        })

  }

}
