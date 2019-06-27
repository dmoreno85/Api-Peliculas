import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './Components/header/header.component';
import { FooterComponent } from './Components/footer/footer.component';
import { ContentPrincipalComponent } from './Components/content-principal/content-principal.component';
import { IndexComponent } from './Views/index/index.component';
import { SearchComponent } from './Components/search/search.component';
import { ContentSecundarioComponent } from './Components/content-secundario/content-secundario.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    ContentPrincipalComponent,
    IndexComponent,
    SearchComponent,
    ContentSecundarioComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
