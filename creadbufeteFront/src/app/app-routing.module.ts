import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetalleClienteComponent } from './cliente/detalle-cliente.component';
import { EditarClienteComponent } from './cliente/editar-cliente.component';
import { ListaClienteComponent } from './cliente/lista-cliente.component';
import { NuevoClienteComponent } from './cliente/nuevo-cliente.component';
import { DetalleCasoComponent } from './coso/detalle-caso.component';
import { EditarCasoComponent } from './coso/editar-caso.component';
import { ListaCasoClienteComponent } from './coso/lista-caso-cliente.component';
import { ListaCasoComponent } from './coso/lista-caso.component';
import { NuevoCasoComponent } from './coso/nuevo-caso.component';

const routes: Routes = [
  { path: '', component: ListaClienteComponent },
  { path: 'detalle/:id', component: DetalleClienteComponent },
  { path: 'nuevo', component: NuevoClienteComponent },
  { path: 'editar/:id', component: EditarClienteComponent },
  { path: 'listaCaso', component: ListaCasoComponent},
  { path: 'detalleCaso/:id', component: DetalleCasoComponent },
  { path: 'nuevoCaso/:id', component: NuevoCasoComponent },
  { path: 'editarCaso/:id', component: EditarCasoComponent },
  { path: 'listaCasocliente/:id', component: ListaCasoClienteComponent },
  { path: '**', redirectTo: '', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
