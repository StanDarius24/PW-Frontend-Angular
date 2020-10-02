import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { PaginaComponent } from './paginaprincipala/pagina/pagina.component';
import { HeaderComponent } from './paginaprincipala/componente/header/header.component';
import { FooterComponent } from './paginaprincipala/componente/footer/footer.component';
import { NavigationComponent } from './paginaprincipala/componente/navigation/navigation.component';
import { FillersComponent } from './paginaprincipala/pagina/fillers/fillers.component';
import { CartComponent } from './paginaprincipala/pagina/cart/cart.component';
import { ProductListComponent } from './paginaprincipala/pagina/product-list/product-list.component';

@NgModule({
  declarations: [
    AppComponent,
    PaginaComponent,
    HeaderComponent,
    FooterComponent,
    NavigationComponent,
    FillersComponent,
    CartComponent,
    ProductListComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
