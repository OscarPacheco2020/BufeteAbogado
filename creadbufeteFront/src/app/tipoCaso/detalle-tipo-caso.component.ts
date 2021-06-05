import { Component, OnInit } from '@angular/core';
import { TipoCaso } from '../models/tipo-caso';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { TipoCasoService } from '../service/tipo-caso.service';

@Component({
  selector: 'app-detalle-tipo-caso',
  templateUrl: './detalle-tipo-caso.component.html',
  styleUrls: ['./detalle-tipo-caso.component.css']
})
export class DetalleTipoCasoComponent implements OnInit {

  tipoCaso: TipoCaso;

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
        this.tipoCaso = data;

      },
      err => {
        this.toastr.error(err.error.mensaje, 'Fail', {
          timeOut: 3000,  positionClass: 'toast-top-center',
        });
        this.router.navigate(['/']);
      }
    );
  }

  volver(): void {
    this.router.navigate(['/listaTipoCaso']);
  }

}
