import { Component, OnInit } from '@angular/core';
import { Caso } from '../models/caso';
import { CasoService } from '../service/caso.service';
import { ToastrService } from 'ngx-toastr';
import { ActivatedRoute, Router  } from '@angular/router';
import { ClienteService } from '../service/cliente.service';
import { Cliente } from '../models/cliente';

@Component({
  selector: 'app-nuevo-caso',
  templateUrl: './nuevo-caso.component.html',
  styleUrls: ['./nuevo-caso.component.css']
})
export class NuevoCasoComponent implements OnInit {

  codigo: string;
  recomendado: string;
  creacion: Date;
  nombreCliente: string;
  cliente: Cliente;

  constructor(
    private casoService: CasoService,
    private toastr: ToastrService,
    private router: Router,
    private activatedRouter: ActivatedRoute,
    private clienteServer: ClienteService
  ) { }

  ngOnInit(): void {
    const id = this.activatedRouter.snapshot.params.id;
    this.clienteServer.detail(id).subscribe(
      data => {
        this.cliente = data;
        this.nombreCliente = this.cliente.nombre;
      },
      err => {
        this.toastr.error(err.error.mensaje, 'Fail', {
          timeOut: 3000, positionClass: 'toast-top-center',
        });
        this.router.navigate(['/listaCaso']);
      }
    );
  }

  onCreate(): void{
    const nuevoCaso = new Caso(this.codigo, this.creacion, this.recomendado, this.cliente);
    this.casoService.save(nuevoCaso).subscribe(
      data => {

        this.toastr.success('Caso Creado', 'OK', {
          timeOut: 3000, positionClass: 'toast-top-center'
        });
        this.router.navigate(['/listaCaso']);
      },
      err => {
        this.toastr.error(err.error.mensaje, 'Fail', {
          timeOut: 3000,  positionClass: 'toast-top-center',
        });

      }

    );
  }

}
