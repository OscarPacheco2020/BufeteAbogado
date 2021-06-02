import { Component, OnInit } from '@angular/core';
import { CasoService } from '../service/caso.service';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Caso } from '../models/caso';


@Component({
  selector: 'app-detalle-caso',
  templateUrl: './detalle-caso.component.html',
  styleUrls: ['./detalle-caso.component.css']
})
export class DetalleCasoComponent implements OnInit {

  caso: Caso;

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
    this.router.navigate(['/listaCaso']);
  }

}
