import {RouterModule, Routes} from '@angular/router';
import {ListaModelComponent} from './paginaprincipala/componente/model/lista-model/lista-model.component';
import {ProdusComponent} from './paginaprincipala/componente/produs/produs.component';
import {CreateModelComponent} from './paginaprincipala/componente/model/create-model.component';

const routes: Routes = [
  { path: 'list', component: ListaModelComponent },
  { path: 'produs/:id', component: ProdusComponent },
  { path: 'create', component: CreateModelComponent },
  { path: '', redirectTo: '/list' , pathMatch: 'full' }
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
