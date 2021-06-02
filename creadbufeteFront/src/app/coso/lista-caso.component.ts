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

  casos: Caso[];

  constructor(
    private casoService: CasoService,
    private toastr: ToastrService
  ) { }

  ngOnInit(): void {
    this.cargarCasos();
  }

  cargarCasos(): void {
    this.casoService.lista().subscribe(
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
