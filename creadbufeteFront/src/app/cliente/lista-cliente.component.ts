import { Component, OnInit } from '@angular/core';
import { Cliente } from '../models/cliente';
import { ToastrService } from 'ngx-toastr';
import { ClienteService } from '../service/cliente.service';

@Component({
  selector: 'app-lista-cliente',
  templateUrl: './lista-cliente.component.html',
  styleUrls: ['./lista-cliente.component.css']
})
export class ListaClienteComponent implements OnInit {

  clientes: Cliente[] = [];

  a: Cliente;
  
  constructor(
    private clienteService: ClienteService,
    private toastr: ToastrService) { }

  ngOnInit(): void {
    this.cargarCliente();
    
  }

  cargarCliente(): void{
    this.clienteService.list().subscribe( 
      data => {
        this.clientes = data;
      },
      err => {
        console.log(err);
      }
      );
  }

  borrar(id: number) {
    this.clienteService.delete(id).subscribe(
      data => {
        this.toastr.success('Cliente Eliminado', 'OK', {
          timeOut: 3000, positionClass: 'toast-top-center'
        });
        this.cargarCliente();
      },
      err => {
        this.toastr.error(err.error.mensaje, 'Fail', {
          timeOut: 3000,  positionClass: 'toast-top-center',
        });
      }
    );
  }
}
