import { Component, OnInit } from '@angular/core';
import { Caso } from '../models/caso';
import { CasoService } from '../service/caso.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-lista-caso',
  templateUrl: './lista-caso.component.html',
  styleUrls: ['./lista-caso.component.css']
})
export class ListaCasoComponent implements OnInit {

  casos: Array<any>;

  totalPages: Array<number>;

  page = 0;
  size = 10;
  order = 'id';
  asc = true;

  isFirst = false;
  isLast = false;

  constructor(
    private casoService: CasoService,
    private toastr: ToastrService
  ) { }

  ngOnInit(): void {
    this.cargarCasos();
  }

  cargarCasos(): void {
    this.casoService.lista(this.page, this.size, this.order, this.asc).subscribe(
      data => {
        this.casos = data.content;
        this.isFirst = data.first;
        this.isLast = data.last;
        this.totalPages = new Array(data['totalPages']);
      },
      err => {
        console.log(err);
      }
    );
  }

  borrar(id: number){
    this.casoService.delete(id).subscribe(
      data => {
        this.toastr.success('Caso Eliminado', 'OK', {
          timeOut: 3000, positionClass: 'toast-top-center'
        });
        this.cargarCasos();
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
