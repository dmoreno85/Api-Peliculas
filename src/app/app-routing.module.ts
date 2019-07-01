import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { IndexComponent } from './Views/index/index.component';
import { ResultsComponent } from './Views/results/results.component';
import { PelisComponent } from './Views/pelis/pelis.component';
import { SeriesComponent } from './Views/series/series.component';
import { RedesSocialesComponent } from './Components/redes-sociales/redes-sociales.component'

const routes: Routes = [
  { path: "", component: IndexComponent },
  { path: "results", component: ResultsComponent },
  { path: "pelis/:type", component: PelisComponent },
  { path: "series/:type", component: SeriesComponent },
  { path: "redesSociales", component: RedesSocialesComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }