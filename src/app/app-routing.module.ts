import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { IndexComponent } from './Views/index/index.component';
import { ResultsComponent } from './Views/results/results.component';
import { PelisComponent } from './Views/pelis/pelis.component';
import { SeriesComponent } from './Views/series/series.component';
import { RedesSocialesComponent } from './Components/redes-sociales/redes-sociales.component'
import { SerieInfoComponent } from './Views/serie-info/serie-info.component'
import { PeliInfoViewComponent } from './Views/peli-info/peli-info.component';

const routes: Routes = [
  { path: "", component: IndexComponent },
  { path: "results", component: ResultsComponent },
<<<<<<< HEAD
  { path: "pelis", component: PelisComponent },
  { path: "series", component: SeriesComponent },
  { path: "series-info/:id", component: SerieInfoComponent },
  { path: "peli-info/:id", component: PeliInfoViewComponent },
=======
  { path: "pelis/:type", component: PelisComponent },
  { path: "pelis-info/:id", component: PeliInfoViewComponent },
  { path: "series/:type", component: SeriesComponent },
>>>>>>> master
  { path: "redesSociales", component: RedesSocialesComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }