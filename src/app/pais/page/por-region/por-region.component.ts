import { Component } from '@angular/core';
import { ICountry } from '../../interfaces/pais.interface';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-por-region',
  templateUrl: './por-region.component.html',
  styles: [`
    button  {
      margin-right : 5px;
    }
  `]
})
export class PorRegionComponent {

  regiones : string[] = ['africa', 'americas', 'asia', 'europe', 'oceania']
  regionActiva : string = '';
  countryList : ICountry[] = []
  isError : boolean = false;

  constructor(private _paisService : PaisService) { }

  activarRegion (region : string) {
    this.isError = false;
    if(this.regionActiva === region) return;
    this.regionActiva = region;
    this.countryList = [];

    this._paisService.buscarRegion(region)
        .subscribe( pais => {
          this.countryList = pais;
        }, error => {
          console.log(error);
          this.isError = true;
          this.countryList = []
        })
  }

  getClassCSS (region : string) : string {
    return (region === this.regionActiva) ? 'btn btn-primary' : 'btn btn-outline-primary'
  }



}
