import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetalleClienteComponent } from './cliente/detalle-cliente.component';
import { EditarClienteComponent } from './cliente/editar-cliente.component';
import { ListaClienteComponent } from './cliente/lista-cliente.component';
import { NuevoClienteComponent } from './cliente/nuevo-cliente.component';

const routes: Routes = [
  { path: '', component: ListaClienteComponent },
  { path: 'detalle/:id', component: DetalleClienteComponent },
  { path: 'nuevo', component: NuevoClienteComponent },
  { path: 'editar/:id', component: EditarClienteComponent },
  { path: '**', redirectTo: '', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
