import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { ComponenteSecundarioComponent } from './componente-secundario/componente-secundario.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
   
    ComponenteSecundarioComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
