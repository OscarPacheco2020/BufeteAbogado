import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListaClienteComponent } from './cliente/lista-cliente.component';
import { DetalleClienteComponent } from './cliente/detalle-cliente.component';
import { NuevoClienteComponent } from './cliente/nuevo-cliente.component';
import { EditarClienteComponent } from './cliente/editar-cliente.component';

import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';


// extartna 
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { FiltroClientePipe } from './pipes/filtro-cliente.pipe';
import { ListaCasoComponent } from './coso/lista-caso.component';
import { NuevoCasoComponent } from './coso/nuevo-caso.component';
import { EditarCasoComponent } from './coso/editar-caso.component';
import { DetalleCasoComponent } from './coso/detalle-caso.component';
import { ListaCasoClienteComponent } from './coso/lista-caso-cliente.component';
import { ListaTipoCasoComponent } from './tipoCaso/lista-tipo-caso.component';
import { DetalleTipoCasoComponent } from './tipoCaso/detalle-tipo-caso.component';
import { EditarTipoCasoComponent } from './tipoCaso/editar-tipo-caso.component';
import { NuevoTipoCasoComponent } from './tipoCaso/nuevo-tipo-caso.component';
import { DeleteTipoCasoComponent } from './tipoCaso/delete-tipo-caso.component';


@NgModule({
  declarations: [
    AppComponent,
    ListaClienteComponent,
    DetalleClienteComponent,
    NuevoClienteComponent,
    EditarClienteComponent,
    FiltroClientePipe,
    ListaCasoComponent,
    NuevoCasoComponent,
    EditarCasoComponent,
    DetalleCasoComponent,
    ListaCasoClienteComponent,
    ListaTipoCasoComponent,
    DetalleTipoCasoComponent,
    EditarTipoCasoComponent,
    NuevoTipoCasoComponent,
    DeleteTipoCasoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule, // required animations module
    ToastrModule.forRoot(), //
    HttpClientModule,
    FormsModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
