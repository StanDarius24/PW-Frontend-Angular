
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './paginaprincipala/componente/header/header.component';
import { FooterComponent } from './paginaprincipala/componente/footer/footer.component';
import { NavigationComponent } from './paginaprincipala/componente/navigation/navigation.component';
import { RouterModule, Routes } from '@angular/router';
import { StoreRouterConnectingModule } from '@ngrx/router-store';
import { StoreModule } from '@ngrx/store';
import {ListaModelComponent} from './paginaprincipala/componente/model/lista-model/lista-model.component';
import {CreateModelComponent} from './paginaprincipala/componente/model/create-model.component';
const appRoutes: Routes = [
  { path: 'list', component: ListaModelComponent },
  { path: 'create', component: CreateModelComponent },
  { path: '', redirectTo: '/list' , pathMatch: 'full' }
  ];
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    NavigationComponent,
    ListaModelComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule,
    StoreRouterConnectingModule.forRoot(),
    RouterModule.forRoot(appRoutes),
    StoreModule.forRoot({}, {})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
