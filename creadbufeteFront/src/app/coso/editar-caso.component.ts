import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Caso } from '../models/caso';
import { TipoCaso } from '../models/tipo-caso';
import { CasoService } from '../service/caso.service';

@Component({
  selector: 'app-editar-caso',
  templateUrl: './editar-caso.component.html',
  styleUrls: ['./editar-caso.component.css']
})
export class EditarCasoComponent implements OnInit {

  caso: Caso;
  codigo: string;
  creacionActual: Date;
  nuevacreacionActual: Date;
  creacion: Date;
  nombreCliente: string;
  recomendado: string;
  actualizarFecha: boolean;
  tipoCaso: TipoCaso;

  constructor(
    private casoServer: CasoService,
    private activatedRouter: ActivatedRoute,
    private toastr: ToastrService,
    private router: Router
  ) { }

  ngOnInit(): void {
    const id = this.activatedRouter.snapshot.params.id;
    this.casoServer.detail(id).subscribe(
      data => {
        this.caso = data;
        this.nombreCliente = this.caso.cliente.nombre;
        this.creacionActual = new Date(this.caso.creacion.toString());
        this.recomendado = this.caso.recomendado;
        this.codigo = this.caso.codigo;
        this.actualizarFecha = false;
      },
      err => {
        this.toastr.error(err.error.mensaje, 'Fail', {
          timeOut: 3000, positionClass: 'toast-top-center',
        });
        this.router.navigate(['/listaCaso']);
      }
    );
  }

  onUpdate(): void {
    const id = this.activatedRouter.snapshot.params.id;


    if(this.actualizarFecha){
      this.creacion = this.nuevacreacionActual;
    }else{
      this.creacion = new Date(this.creacionActual.toString());
    }

    const casoNuevo = new Caso(this.codigo, this.creacion, this.recomendado,
      this.caso.cliente, this.caso.tipoCaso);

    this.casoServer.update(id, casoNuevo).subscribe(
      data => {
        this.toastr.success('Caso Actualizado', 'OK', {
          timeOut: 3000, positionClass: 'toast-top-center'
        });
        this.router.navigate(['/listaCaso']);
      },
      err => {
        this.toastr.error(err.error.mensaje, 'Fail', {
          timeOut: 3000, positionClass: 'toast-top-center',
        });
        this.router.navigate(['/listaCaso']);
      }
    );
  }
}
