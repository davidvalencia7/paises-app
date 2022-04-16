import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { switchMap, tap } from 'rxjs';
import { PaisService } from '../../services/pais.service';
import { ICountry } from '../../interfaces/pais.interface';

@Component({
  selector: 'app-ver-pais',
  templateUrl: './ver-pais.component.html',
  styles: [
  ]
})
export class VerPaisComponent implements OnInit {

  pais! : ICountry;

  constructor(private _activatedRoute : ActivatedRoute, private _paisService : PaisService) { }

  ngOnInit(): void {

    this._activatedRoute
        .params
        .pipe(
            switchMap( ({id}) => this._paisService.getPaisPorCodigo( id ) ),
            tap(console.log)
            )
        .subscribe( pais => {
          //console.log(pais[0]);
          this.pais = pais[0];
        })


  //   this._activatedRoute.params
  //       .subscribe( ({ id }) => {
  //         console.log(id);

  //         this._paisService.getPaisPorCodigo(id).subscribe( pais => {
  //           console.log(pais);

  //         })

  //       })
   }

}
