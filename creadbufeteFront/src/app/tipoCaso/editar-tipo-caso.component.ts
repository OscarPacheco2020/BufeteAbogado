import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { TipoCaso } from '../models/tipo-caso';
import { TipoCasoService } from '../service/tipo-caso.service';

@Component({
  selector: 'app-editar-tipo-caso',
  templateUrl: './editar-tipo-caso.component.html',
  styleUrls: ['./editar-tipo-caso.component.css']
})
export class EditarTipoCasoComponent implements OnInit {

  tipoCaso: TipoCaso;
  nombre: string;

  constructor(
    private tipoCasoService: TipoCasoService,
    private activatedRouter: ActivatedRoute,
    private toastr: ToastrService,
    private router: Router
  ) { }

  ngOnInit(): void {
    const id = this.activatedRouter.snapshot.params.id;
    this.tipoCasoService.detail(id).subscribe(
      data => {
        this.tipoCaso = data;
        this.nombre = this.tipoCaso.nombre;

      },
      err => {
        this.toastr.error(err.error.mensaje, 'Fail', {
          timeOut: 3000, positionClass: 'toast-top-center',
        });
        this.router.navigate(['/listaTipoCaso']);
      }
    );
  }

  onUpdate(): void {
    const id = this.activatedRouter.snapshot.params.id;


    const tipoCasoNuevo = new TipoCaso(this.nombre);

    this.tipoCasoService.update(id, tipoCasoNuevo).subscribe(
      data => {
        this.toastr.success('Tipo de Caso Actualizado', 'OK', {
          timeOut: 3000, positionClass: 'toast-top-center'
        });
        this.router.navigate(['/listaTipoCaso']);
      },
      err => {
        this.toastr.error(err.error.mensaje, 'Fail', {
          timeOut: 3000, positionClass: 'toast-top-center',
        });
        this.router.navigate(['/listaTipoCaso']);
      }
    );
  }

}
