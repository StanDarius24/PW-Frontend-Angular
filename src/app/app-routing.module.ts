import {RouterModule, Routes} from '@angular/router';
import {ListaModelComponent} from './paginaprincipala/componente/model/lista-model/lista-model.component';
import {ProdusComponent} from './paginaprincipala/componente/produs/produs.component';
import {CreateModelComponent} from './paginaprincipala/componente/model/create-model.component';
import {LoginComponent} from './paginaprincipala/componente/login/login.component';

const routes: Routes = [
  { path: 'list', component: ListaModelComponent },
  { path: 'produs/:id', component: ProdusComponent },
  { path: 'create', component: CreateModelComponent },
  { path: '', redirectTo: '/list' , pathMatch: 'full' },
  { path: 'login', component: LoginComponent}
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
