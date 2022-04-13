import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { PorPaisComponent } from './pais/page/por-pais/por-pais.component';
import { PorRegionComponent } from './pais/page/por-region/por-region.component';
import { PorCapitalComponent } from './pais/page/por-capital/por-capital.component';
import { VerPaisComponent } from './pais/page/ver-pais/ver-pais.component';

const routes : Routes = [
  {
    path : '',
    component : PorPaisComponent,
    pathMatch : 'full'
  },
  {
    path : 'region',
    component : PorRegionComponent
  },
  {
    path : 'capital',
    component : PorCapitalComponent
  },
  {
    path : 'pais/:id',
    component : VerPaisComponent
  },
  {
    path : '**',
    redirectTo : ''
  }
]


@NgModule({
  imports : [
    RouterModule.forRoot( routes )
  ],
  exports : [
    RouterModule
  ]
})
export class AppRoutingModule {

}
