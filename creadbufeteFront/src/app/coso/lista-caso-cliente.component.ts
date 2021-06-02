import { Component, OnInit } from '@angular/core';
import { Caso } from '../models/caso';
import { CasoService } from '../service/caso.service';
import { ToastrService } from 'ngx-toastr';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-lista-caso-cliente',
  templateUrl: './lista-caso-cliente.component.html',
  styleUrls: ['./lista-caso-cliente.component.css']
})
export class ListaCasoClienteComponent implements OnInit {

  casos: Caso[];

  constructor(
    private casoService: CasoService,
    private activatedRouter: ActivatedRoute,
    private toastr: ToastrService
  ) { }

  ngOnInit(): void {
    this.cargarCasos();
  }

  cargarCasos(): void {
    const id = this.activatedRouter.snapshot.params.id;

    this.casoService.listaForCliente(id).subscribe(
      data => {
        this.casos = data;
      },
      err => {
        console.log(err);
      }
    );
  }

  borrar(id: number){
    this.casoService.delete(id).subscribe(
      data => {
        this.toastr.success('Cliente Eliminado', 'OK', {
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

}
