import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Idd } from '../../interfaces/pais.interface';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-ver-pais',
  templateUrl: './ver-pais.component.html',
  styles: [
  ]
})
export class VerPaisComponent implements OnInit {

  constructor(private _activatedRoute : ActivatedRoute, private _paisService : PaisService) { }

  ngOnInit(): void {

    this._activatedRoute.params
        .subscribe( ({ id }) => {
          console.log(id);

          this._paisService.getPaisPorCodigo(id).subscribe( pais => {
            console.log(pais);

          })

        })
  }

}
