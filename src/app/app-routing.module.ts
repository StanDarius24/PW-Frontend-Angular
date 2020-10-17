import {RouterModule, Routes} from '@angular/router';
import {ListaModelComponent} from './paginaprincipala/componente/model/lista-model/lista-model.component';
import {ProdusComponent} from './paginaprincipala/componente/produs/produs.component';
import {CreateModelComponent} from './paginaprincipala/componente/model/create-model.component';
import {LoginComponent} from './paginaprincipala/componente/login/login.component';
import {SearchComponent} from './paginaprincipala/componente/search/search.component';
import {StergeComponent} from './paginaprincipala/componente/sterge/sterge.component';
import {EditareComponent} from './paginaprincipala/componente/editare/editare.component';
import {AdminhubComponent} from './paginaprincipala/componente/adminhub/adminhub.component';
import {CategorieComponent} from './paginaprincipala/componente/categorie/categorie.component';
import {PageditareComponent} from './paginaprincipala/componente/editare/pageditare/pageditare.component';



const routes: Routes = [
  { path: 'list', component: ListaModelComponent },
  { path: 'produs/:id', component: ProdusComponent },
  { path: 'create', component: CreateModelComponent },
  { path: '', redirectTo: '/list' , pathMatch: 'full' },
  { path: 'login', component: LoginComponent},
  { path: 'search/:name', component: SearchComponent },
  {path: 'sterge' , component: StergeComponent},
  {path: 'editare', component: EditareComponent},
  {path: 'adminhub' ,component: AdminhubComponent},
  {path: 'categorie/:nume' , component: CategorieComponent},
  {path: 'editare/:id' , component:PageditareComponent}
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
