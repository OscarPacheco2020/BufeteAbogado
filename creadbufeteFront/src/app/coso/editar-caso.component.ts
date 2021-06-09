import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Caso } from '../models/caso';
import { TipoCaso } from '../models/tipo-caso';
import { CasoService } from '../service/caso.service';
import { TipoCasoService } from '../service/tipo-caso.service';

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
  tipoCasos: TipoCaso[] = [];
  IdtipoCaso: number;
  nuevoTipoCaso: boolean;
  nombreTipoCaso: string;

  constructor(
    private casoServer: CasoService,
    private activatedRouter: ActivatedRoute,
    private toastr: ToastrService,
    private router: Router,
    private tipoCasoService: TipoCasoService
  ) { }

  ngOnInit(): void {
    const id = this.activatedRouter.snapshot.params.id;
    this.nuevoTipoCaso = false;
    this.casoServer.detail(id).subscribe(
      data => {
        this.caso = data;
        this.nombreCliente = this.caso.cliente.nombre;
        this.creacionActual = new Date(this.caso.creacion.toString());
        this.recomendado = this.caso.recomendado;
        this.codigo = this.caso.codigo;
        this.actualizarFecha = false;
        this.tipoCaso = this.caso.tipoCaso;
        this.cargarTipoCaso();
        this.IdtipoCaso = this.caso.tipoCaso.id;

      },
      err => {
        this.toastr.error(err.error.mensaje, 'Fail', {
          timeOut: 3000, positionClass: 'toast-top-center',
        });
        this.router.navigate(['/listaCaso']);
      }
    );

  }

  cargarTipoCaso(): void{
    this.tipoCasoService.lista().subscribe(
      (data) => {
        this.tipoCasos = data;
      },
      (err) => {
        this.toastr.error(err.error.mensaje, 'Fail', {
          timeOut: 3000,
          positionClass: 'toast-top-center',
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


    if(this.nuevoTipoCaso){
      this.tipoCaso =  new TipoCaso(this.nombreTipoCaso);
    }else{
      for (let caso of this.tipoCasos) {
        if (caso.id == this.IdtipoCaso) {
          this.tipoCaso = caso;
        }
      }
    }

    const casoNuevo = new Caso(this.codigo, this.creacion, this.recomendado,
      this.caso.cliente, this.tipoCaso);

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
        //this.router.navigate(['/listaCaso']);
      }
    );
  }
}
