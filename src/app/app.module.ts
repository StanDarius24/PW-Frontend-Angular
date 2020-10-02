import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { PaginaComponent } from './paginaprincipala/pagina/pagina.component';
import { HeaderComponent } from './paginaprincipala/componente/header/header.component';
import { FooterComponent } from './paginaprincipala/componente/footer/footer.component';
import { NavigationComponent } from './paginaprincipala/componente/navigation/navigation.component';
import { RouterModule, Routes } from '@angular/router';
import { StoreRouterConnectingModule } from '@ngrx/router-store';
import { StoreModule } from '@ngrx/store';

@NgModule({
  declarations: [
    AppComponent,
    PaginaComponent,
    HeaderComponent,
    FooterComponent,
    NavigationComponent
  ],
  imports: [
    BrowserModule,
    RouterModule,
    StoreRouterConnectingModule.forRoot(),
    RouterModule.forRoot([]),
    StoreModule.forRoot({}, {})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
