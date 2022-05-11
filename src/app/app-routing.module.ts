import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Pagina1Component } from './paginas/pagina1/pagina1.component';
import { Pagina2Component } from './paginas/pagina2/pagina2.component';
import { Pagina3Component } from './paginas/pagina3/pagina3.component';
import { Pagina4Component } from './paginas/pagina4/pagina4.component';
import { Pagina5Component } from './paginas/pagina5/pagina5.component';

const routes: Routes = [

  { path: 'pagina1', component: Pagina1Component},
  { path: 'pagina2', component: Pagina2Component},
  { path: 'pagina3', component: Pagina3Component},
  { path: 'pagina4', component: Pagina4Component},
  { path: 'pagina5', component: Pagina5Component}

]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
