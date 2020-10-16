
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './paginaprincipala/componente/header/header.component';
import { FooterComponent } from './paginaprincipala/componente/footer/footer.component';
import { RouterModule, Routes } from '@angular/router';
import { StoreRouterConnectingModule } from '@ngrx/router-store';
import { StoreModule } from '@ngrx/store';
import {ListaModelComponent} from './paginaprincipala/componente/model/lista-model/lista-model.component';
import {CreateModelComponent} from './paginaprincipala/componente/model/create-model.component';
import { FormsModule , ReactiveFormsModule } from '@angular/forms';
import {ProduseService} from './paginaprincipala/services/produse.service';
import {HttpClientModule} from '@angular/common/http';
import { ProdusComponent} from './paginaprincipala/componente/produs/produs.component';
import {LoginComponent} from './paginaprincipala/componente/login/login.component';
import {SearchComponent} from './paginaprincipala/componente/search/search.component';
import {StergeComponent} from './paginaprincipala/componente/sterge/sterge.component';
import {EditareComponent} from './paginaprincipala/componente/editare/editare.component';
import {AdminhubComponent} from './paginaprincipala/componente/adminhub/adminhub.component';
import {CategorieComponent} from './paginaprincipala/componente/categorie/categorie.component';



const appRoutes: Routes = [
  { path: 'list', component: ListaModelComponent },
  { path: 'produs/:id', component: ProdusComponent },
  { path: 'create', component: CreateModelComponent },
  { path: '', redirectTo: '/list' , pathMatch: 'full' },
  { path: 'login', component: LoginComponent},
  { path: 'search/:name', component: SearchComponent },
  {path: 'sterge' , component: StergeComponent},
  {path: 'editare', component: EditareComponent},
  {path: 'adminhub' ,component: AdminhubComponent},
  {path: 'categorie/:nume' , component: CategorieComponent}

  ];
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    CreateModelComponent,
    ProdusComponent,
    ListaModelComponent,
    StergeComponent,
    EditareComponent,
    AdminhubComponent,
    CategorieComponent
  ],
  imports: [
    BrowserModule,
    RouterModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    StoreRouterConnectingModule.forRoot(),
    RouterModule.forRoot(appRoutes),
    StoreModule.forRoot({}, {}),

  ],
  providers: [ProduseService],
  bootstrap: [AppComponent]
})
export class AppModule { }
