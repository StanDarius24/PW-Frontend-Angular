import {RouterModule, Routes} from '@angular/router';
import {AddComponent} from './paginaprincipala/componente/add/add.component';

const routes : Routes = [
  {path: '' , component: AddComponent}
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
