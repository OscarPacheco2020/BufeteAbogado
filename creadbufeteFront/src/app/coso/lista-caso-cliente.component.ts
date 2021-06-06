import { Component, OnInit } from '@angular/core';
import { CasoService } from '../service/caso.service';
import { ClienteService } from '../service/cliente.service';
import { ToastrService } from 'ngx-toastr';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-lista-caso-cliente',
  templateUrl: './lista-caso-cliente.component.html',
  styleUrls: ['./lista-caso-cliente.component.css'],
})
export class ListaCasoClienteComponent implements OnInit {
  casos: Array<any>;

  nombreCliente: String;
  totalPages: Array<number>;

  page = 0;
  size = 10;
  order = 'id';
  asc = true;

  isFirst = false;
  isLast = false;

  constructor(
    private casoService: CasoService,
    private activatedRouter: ActivatedRoute,
    private toastr: ToastrService,
    private clienteService: ClienteService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.cargarCliente();
    this.cargarCasos();
  }

  cargarCliente(): void {
    const id = this.activatedRouter.snapshot.params.id;

    this.clienteService.detail(id).subscribe(
      (data) => {
        this.nombreCliente = data.nombre;
      },
      (err) => {
        this.toastr.error(err.error.mensaje, 'Fail', {
          timeOut: 3000,
          positionClass: 'toast-top-center',
        });
        this.router.navigate(['/']);
      }
    );
  }
  cargarCasos(): void {
    const id = this.activatedRouter.snapshot.params.id;

    this.casoService
      .listaForCliente(this.page, this.size, this.order, this.asc, id)
      .subscribe(
        (data) => {
          this.casos = data.content;
          this.isFirst = data.first;
          this.isLast = data.last;
          this.totalPages = new Array(data['totalPages']);
        },
        (err) => {
          this.toastr.error(err.error.mensaje, 'Fail', {
            timeOut: 3000,
            positionClass: 'toast-top-center',
          });
          this.router.navigate(['/']);
        }
      );
  }

  borrar(id: number) {
    this.casoService.delete(id).subscribe(
      (data) => {
        this.toastr.success('Caso Eliminado', 'OK', {
          timeOut: 3000,
          positionClass: 'toast-top-center',
        });
        this.cargarCasos();
      },
      (err) => {
        this.toastr.error(err.error.mensaje, 'Fail', {
          timeOut: 3000,
          positionClass: 'toast-top-center',
        });
      }
    );
  }

  sort(): void {
    this.asc = !this.asc;
    this.cargarCasos();
  }

  rewind(): void {
    if (!this.isFirst) {
      this.page--;
      this.cargarCasos();
    }
  }

  forward(): void {
    if (!this.isLast) {
      this.page++;
      this.cargarCasos();
    }
  }

  setPage(page: number): void {
    this.page = page;
    this.cargarCasos();
  }

  setOrder(order: string): void {
    this.order = order;
    this.cargarCasos();
  }
}
