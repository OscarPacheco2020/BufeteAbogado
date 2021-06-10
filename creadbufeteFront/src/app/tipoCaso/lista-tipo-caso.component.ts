import { Component, OnInit } from '@angular/core';
import { TipoCaso } from '../models/tipo-caso';
import { TipoCasoService } from '../service/tipo-caso.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-lista-tipo-caso',
  templateUrl: './lista-tipo-caso.component.html',
  styleUrls: ['./lista-tipo-caso.component.css']
})
export class ListaTipoCasoComponent implements OnInit {

  tipoCasos: TipoCaso[] = [];

  filtroTipoCaso: '';

  constructor(
    private tipoCasoService: TipoCasoService,
    private toastr: ToastrService
  ) { }

  ngOnInit(): void {
    this.cargarTipoCasos();
  }

  cargarTipoCasos(): void{
    this.tipoCasoService.lista().subscribe(
      data => {
        this.tipoCasos = data;
      },
      err => {
        console.log(err);
      }
    );
  }


}
