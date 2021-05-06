import { Component, OnInit } from '@angular/core';
import { Cliente } from '../models/cliente';
import { ClienteService } from '../service/cliente.service';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';

interface Tipo {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-nuevo-cliente',
  templateUrl: './nuevo-cliente.component.html',
  styleUrls: ['./nuevo-cliente.component.css']
})
export class NuevoClienteComponent implements OnInit {

  nombre: string;

  apellido: string;

  tipoCliente: string;

  dui: string;

  nit: string;

  telefono: string;

  celular: string;

  direccion: string;

  tipos: Tipo[] = [
    {value: 'NATURAL', viewValue: 'Natural'},
    {value: 'LEGAL', viewValue: 'Legal'},
  ];

  constructor(
    private clienteService: ClienteService,
    private toastr: ToastrService,
    private router: Router) { }

  ngOnInit(): void {

  }

  onCreate(): void {
    
    const cliente = new Cliente(this.nombre , this.apellido, this.tipoCliente, 
      this.dui, this.nit , this.telefono , this.celular , this.direccion);
    this.clienteService.save(cliente).subscribe(
      data => {
        this.toastr.success('Cliente Creado', 'OK', {
          timeOut: 3000, positionClass: 'toast-top-center'
        });
        this.router.navigate(['/']);
      },
      err => {
        this.toastr.error(err.error.mensaje, 'Fail', {
          timeOut: 3000,  positionClass: 'toast-top-center',
        });
        this.router.navigate(['/']);
      }
    );
  }

}
