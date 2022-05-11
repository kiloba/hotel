import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './componentes/menu/menu.component';
import { PieComponent } from './componentes/pie/pie.component';
import { Pagina1Component } from './paginas/pagina1/pagina1.component';
import { Pagina2Component } from './paginas/pagina2/pagina2.component';
import { Pagina3Component } from './paginas/pagina3/pagina3.component';
import { Pagina4Component } from './paginas/pagina4/pagina4.component';
import { Pagina5Component } from './paginas/pagina5/pagina5.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    PieComponent,
    Pagina1Component,
    Pagina2Component,
    Pagina3Component,
    Pagina4Component,
    Pagina5Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
