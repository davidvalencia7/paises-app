import { Component } from '@angular/core';
import { ICountry } from '../../interfaces/pais.interface';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-por-capital',
  templateUrl: './por-capital.component.html',
  styles: [
  ]
})
export class PorCapitalComponent {

  termino : string = '';
  isError : boolean = false;
  countryList : ICountry[] = [];


  constructor(private _paisService : PaisService) { }

  buscar( termino : string){
    console.log(termino);
    this.termino = termino;
    this.isError = false;

    this._paisService.buscarCapital(termino)
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

  sugerencias ( termino : string) {

    this.isError = false;


  }

}
