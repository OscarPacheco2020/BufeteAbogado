import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

// extartna 
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { ToastrModule } from 'ngx-toastr';
import { ListaClienteComponent } from './cliente/lista-cliente.component';
import { DetalleClienteComponent } from './cliente/detalle-cliente.component';
import { NuevoClienteComponent } from './cliente/nuevo-cliente.component';
import { EditarClienteComponent } from './cliente/editar-cliente.component';

@NgModule({
  declarations: [
    AppComponent,
    ListaClienteComponent,
    DetalleClienteComponent,
    NuevoClienteComponent,
    EditarClienteComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule, // required animations module
    ToastrModule.forRoot() //
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
