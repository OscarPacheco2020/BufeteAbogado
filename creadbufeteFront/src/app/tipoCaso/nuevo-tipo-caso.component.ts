import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Router  } from '@angular/router';
import { TipoCasoService } from '../service/tipo-caso.service';
import { TipoCaso } from '../models/tipo-caso';

@Component({
  selector: 'app-nuevo-tipo-caso',
  templateUrl: './nuevo-tipo-caso.component.html',
  styleUrls: ['./nuevo-tipo-caso.component.css']
})
export class NuevoTipoCasoComponent implements OnInit {

  nombre: string;

  constructor(
    private toastr: ToastrService,
    private router: Router,
    private tipoCasoService: TipoCasoService
  ) { }

  ngOnInit(): void {
  }

  onCreate(): void{
    const nuevoTipoCaso = new TipoCaso(this.nombre);
    this.tipoCasoService.save(nuevoTipoCaso).subscribe(
      data => {

        this.toastr.success('Tipo de Caso Creado', 'OK', {
          timeOut: 3000, positionClass: 'toast-top-center'
        });
        this.router.navigate(['/listaTipoCaso']);
      },
      err => {
        this.toastr.error(err.error.mensaje, 'Fail', {
          timeOut: 3000,  positionClass: 'toast-top-center',
        });

      }

    );
  }

}
