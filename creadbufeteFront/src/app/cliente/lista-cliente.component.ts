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

  clientes: Array<any>;

  totalPages: Array<number>;

  filtroClienteV: '';

  page = 0;
  size = 10;
  order = 'id';
  asc = true;

  isFirst = false;
  isLast = false;

  constructor(
    private clienteService: ClienteService,
    private toastr: ToastrService) { }

  ngOnInit(): void {
    this.cargarCliente();
  }

  cargarCliente(): void {
    this.clienteService.list(this.page, this.size, this.order, this.asc).subscribe(
      data => {
        this.clientes = data.content;
        this.isFirst = data.first;
        this.isLast = data.last;
        this.totalPages = new Array(data['totalPages']);
      },
      err => {
        console.log(err);
      }
    );
  }

  borrar(id: number): void {
    this.clienteService.delete(id).subscribe(
      data => {
        this.toastr.success('Cliente Eliminado', 'OK', {
          timeOut: 3000, positionClass: 'toast-top-center'
        });
        this.cargarCliente();
      },
      err => {
        this.toastr.error(err.error.mensaje, 'Fail', {
          timeOut: 3000, positionClass: 'toast-top-center',
        });
      }
    );
  }

  sort(): void {
    this.asc = !this.asc;
    this.cargarCliente();
  }

  rewind(): void {
    if (!this.isFirst) {
      this.page--;
      this.cargarCliente();
    }
  }

  forward(): void {
    if (!this.isLast) {
      this.page++;
      this.cargarCliente();
    }
  }

  setPage(page: number): void {
    this.page = page;
    this.cargarCliente();
  }

  setOrder(order: string): void {
    this.order = order;
    this.cargarCliente();
  }
}
