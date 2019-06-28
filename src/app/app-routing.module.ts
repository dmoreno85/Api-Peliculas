import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { IndexComponent } from './Views/index/index.component';
import { ResultsComponent } from './Views/results/results.component';
import { PelisComponent } from './Views/pelis/pelis.component';
import { SeriesComponent } from './Views/series/series.component';

const routes: Routes = [
  { path: "", component: IndexComponent },
  { path: "results", component: ResultsComponent },
  { path: "pelis", component: PelisComponent},
  { path: "series", component: SeriesComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
