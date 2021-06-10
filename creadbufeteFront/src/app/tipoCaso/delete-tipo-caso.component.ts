import { Component, OnInit } from '@angular/core';
import { TipoCaso } from '../models/tipo-caso';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { TipoCasoService } from '../service/tipo-caso.service';

@Component({
  selector: 'app-delete-tipo-caso',
  templateUrl: './delete-tipo-caso.component.html',
  styleUrls: ['./delete-tipo-caso.component.css']
})
export class DeleteTipoCasoComponent implements OnInit {

  tipoCaso: TipoCaso;

  tipoCasoOld: TipoCaso;

  tipoCasos: TipoCaso[];

  nuevoTipoCaso: boolean;

  nombreTipoCaso: string;

  IdtipoCaso: number;

  nombre: string;

  constructor(
    private tipoCasoServer: TipoCasoService,
    private activatedRouter: ActivatedRoute,
    private toastr: ToastrService,
    private router: Router
  ) { }

  ngOnInit(): void {
    const id = this.activatedRouter.snapshot.params.id;
    this.tipoCasoServer.detail(id).subscribe(
      data => {
        this.tipoCasoOld = data;
        this.nombre = this.tipoCasoOld.nombre;
        this.nuevoTipoCaso = false;
      },
      err => {
        this.toastr.error(err.error.mensaje, 'Fail', {
          timeOut: 3000,  positionClass: 'toast-top-center',
        });
        this.router.navigate(['/listaTipoCaso']);
      }
    );

    this.tipoCasoServer.lista().subscribe(
      data => {
        this.tipoCasos = data;
        const index = this.tipoCasos.findIndex(p => p.id == id);
        this.tipoCasos.splice(index, 1);
      },
      err => {
        this.toastr.error(err.error.mensaje, 'Fail', {
          timeOut: 3000,  positionClass: 'toast-top-center',
        });
        this.router.navigate(['/listaTipoCaso']);
      }
    );


  }


  onUpdate(): void {

    if(this.nuevoTipoCaso){
      this.tipoCaso =  new TipoCaso(this.nombreTipoCaso);
    }else{
      for (let caso of this.tipoCasos) {
        if (caso.id == this.IdtipoCaso) {
          this.tipoCaso = caso;
        }
      }
    }

    //console.log(this.tipoCaso.id+ '  ' + this.tipoCaso.nombre);

    this.tipoCasoServer.updateTipoCasoInCasos(this.tipoCasoOld.id, this.tipoCaso).subscribe(
      data => {
        this.toastr.success('Casos Actualizado con el nuevo Tipo de Caso', 'OK', {
          timeOut: 3000, positionClass: 'toast-top-center'
        });

      },
      err => {
        this.toastr.error(err.error.mensaje, 'Fail', {
          timeOut: 3000, positionClass: 'toast-top-center',
        });

      }
    );

   this.tipoCasoServer.delete(this.tipoCasoOld.id).subscribe(
    data => {
      this.toastr.success('Tipo de Caso Eliminado', 'OK', {
        timeOut: 3000, positionClass: 'toast-top-center'
      });
      this.router.navigate(['/listaTipoCaso']);
    },
    err => {
      this.toastr.error(err.error.mensaje, 'Fail', {
        timeOut: 3000, positionClass: 'toast-top-center',
      });

    }
  );

  }

}
