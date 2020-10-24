import { NgModule } from '@angular/core';
import { ServerModule } from '@angular/platform-server';

import { AppModule } from './app.module';
import { AppComponent } from './app.component';
import {HeaderComponent} from './paginaprincipala/componente/header/header.component';
import {CreateModelComponent} from './paginaprincipala/componente/model/create-model.component';


@NgModule({
  imports: [
    AppModule,
    ServerModule,
    HeaderComponent,
    CreateModelComponent
  ],
  bootstrap: [AppComponent],
})
export class AppServerModule {}
