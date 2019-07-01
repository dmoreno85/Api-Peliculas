import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { IndexComponent } from './Views/index/index.component';
import { ResultsComponent } from './Views/results/results.component';
import { PelisComponent } from './Views/pelis/pelis.component';
import { SeriesComponent } from './Views/series/series.component';
import { RedesSocialesComponent } from './Components/redes-sociales/redes-sociales.component'
import { PeliInfoViewComponent } from './Views/peli-info/peli-info.component';

const routes: Routes = [
  { path: "", component: IndexComponent },
  { path: "results", component: ResultsComponent },
  { path: "pelis/:type", component: PelisComponent },
  { path: "series", component: SeriesComponent },
  { path: "peli-info/:id", component: PeliInfoViewComponent },
  { path: "redesSociales", component: RedesSocialesComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
