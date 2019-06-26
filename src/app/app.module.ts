import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
<<<<<<< HEAD
=======
import { FooterComponent } from './footer/footer.component';
<<<<<<< HEAD
>>>>>>> master
=======
import { ContentPrincipalComponent } from './content-principal/content-principal.component';
>>>>>>> master

@NgModule({
  declarations: [
    AppComponent,
<<<<<<< HEAD
    HeaderComponent
=======
    HeaderComponent,
<<<<<<< HEAD
    FooterComponent
>>>>>>> master
=======
    FooterComponent,
    ContentPrincipalComponent
>>>>>>> master
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
