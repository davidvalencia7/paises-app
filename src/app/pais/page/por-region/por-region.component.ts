import { Component } from '@angular/core';

@Component({
  selector: 'app-por-region',
  templateUrl: './por-region.component.html',
  styles: [`
  button  {
    margin-right : 5px;
  }
  `

  ]
})
export class PorRegionComponent {

  regiones : string[] = ['africa', 'americas', 'asia', 'europe', 'oceania']
  regionActiva : string = '';

  constructor() { }

  activarRegion (region : string) {
    this.regionActiva = region;
  }

  getClassCSS (region : string) : string {
    return (region === this.regionActiva) ? 'btn btn-primary' : 'btn btn-outline-primary'
  }

}
