import { Component, OnInit } from '@angular/core';
import { Caso } from '../models/caso';
import { CasoService } from '../service/caso.service';
import { TipoCasoService } from '../service/tipo-caso.service';
import { ToastrService } from 'ngx-toastr';
import { ActivatedRoute, Router } from '@angular/router';
import { ClienteService } from '../service/cliente.service';
import { Cliente } from '../models/cliente';
import { TipoCaso } from '../models/tipo-caso';

@Component({
  selector: 'app-nuevo-caso',
  templateUrl: './nuevo-caso.component.html',
  styleUrls: ['./nuevo-caso.component.css'],
})
export class NuevoCasoComponent implements OnInit {
  codigo: string;
  recomendado: string;
  creacion: Date;
  nombreCliente: string;
  cliente: Cliente;
  tipoCasos: TipoCaso[] = [];
  IdtipoCaso: number;
  tipoCaso: TipoCaso;
  nuevoTipoCaso: boolean;
  nombreTipoCaso: string;

  constructor(
    private casoService: CasoService,
    private toastr: ToastrService,
    private router: Router,
    private activatedRouter: ActivatedRoute,
    private clienteServer: ClienteService,
    private tipoCasoService: TipoCasoService
  ) {}

  ngOnInit(): void {
    this.nuevoTipoCaso = false;
    const id = this.activatedRouter.snapshot.params.id;
    this.clienteServer.detail(id).subscribe(
      (data) => {
        this.cliente = data;
        this.nombreCliente = this.cliente.nombre;
      },
      (err) => {
        this.toastr.error(err.error.mensaje, 'Fail', {
          timeOut: 3000,
          positionClass: 'toast-top-center',
        });
        this.router.navigate(['/listaCaso']);
      }
    );

   this.cargaTipoCasos();
  }

  cargaTipoCasos(): void{
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

  onCreate(): void {

    if(this.nuevoTipoCaso){
      this.tipoCaso =  new TipoCaso(this.nombreTipoCaso);
    }else{
      for (let caso of this.tipoCasos) {
        if (caso.id == this.IdtipoCaso) {
          this.tipoCaso = caso;
        }
      }
    }

    const nuevoCaso = new Caso(
      this.codigo,
      this.creacion,
      this.recomendado,
      this.cliente,
      this.tipoCaso
    );



    this.casoService.save(nuevoCaso).subscribe(
      (data) => {
        this.toastr.success('Caso Creado', 'OK', {
          timeOut: 3000,
          positionClass: 'toast-top-center',
        });
        this.router.navigate(['/listaCaso']);
      },
      (err) => {
        this.toastr.error(err.error.mensaje, 'Fail', {
          timeOut: 3000,
          positionClass: 'toast-top-center',
        });
      }
    );
  }
}
