import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { RouterModule } from '@angular/router'
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http'

import { AppComponent } from './app.component';
import { HeaderComponent } from './Components/header/header.component';
import { FooterComponent } from './Components/footer/footer.component';
import { ContentPrincipalComponent } from './Components/content-principal/content-principal.component';
import { IndexComponent } from './Views/index/index.component';
import { SearchComponent } from './Components/search/search.component';
import { ContentSecundarioComponent } from './Components/content-secundario/content-secundario.component';
import { ResultsComponent } from './Views/results/results.component';
import { SeriesComponent } from './Views/series/series.component';
import { PelisComponent } from './Views/pelis/pelis.component';
import { PeliInfoViewComponent } from './Views/peli-info/peli-info.component';
import { PeliInfoComponent } from './Components/peli-info/peli-info.component';
import { SerieInfoComponent } from './Views/serie-info/serie-info.component';
import { RedesSocialesComponent } from './Components/redes-sociales/redes-sociales.component';
import { FilmsResultsComponent } from './Components/films-results/films-results.component';
import { SeriesResultsComponent } from './Components/series-results/series-results.component';
import { SeriesInfoComponent } from './Components/series-info/series-info.component';
import { ContentTerciarioComponent } from './Components/content-terciario/content-terciario.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    ContentPrincipalComponent,
    IndexComponent,
    SearchComponent,
    ContentSecundarioComponent,
    ContentTerciarioComponent,
    ResultsComponent,
    SeriesComponent,
    PelisComponent,
    PeliInfoComponent,
    PeliInfoViewComponent,
    SerieInfoComponent,
    RedesSocialesComponent,
    FilmsResultsComponent,
    SeriesResultsComponent,
    SeriesInfoComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
