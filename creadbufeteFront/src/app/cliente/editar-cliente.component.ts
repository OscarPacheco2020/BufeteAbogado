import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Cliente } from '../models/cliente';
import { ClienteService } from '../service/cliente.service';

interface Tipo {
  value: string;
}

@Component({
  selector: 'app-editar-cliente',
  templateUrl: './editar-cliente.component.html',
  styleUrls: ['./editar-cliente.component.css']
})
export class EditarClienteComponent implements OnInit {

  cliente: Cliente;

  vista: boolean = true;

  tipos: Tipo[] = [
    { value: 'NATURAL' },
    { value: 'LEGAL' },
  ];

  constructor(
    private clienteServer: ClienteService,
    private activatedRouter: ActivatedRoute,
    private toastr: ToastrService,
    private router: Router
  ) { }

  ngOnInit(): void {
    const id = this.activatedRouter.snapshot.params.id;
    this.clienteServer.detail(id).subscribe(
      data => {
        this.cliente = data;
        if (this.cliente.tipoCliente == 'NATURAL') {
          this.vista = true;
        } else {
          this.vista = false;
        }
      },
      err => {
        this.toastr.error(err.error.mensaje, 'Fail', {
          timeOut: 3000, positionClass: 'toast-top-center',
        });
        this.router.navigate(['/']);
      }
    );
  }

  onUpdate(): void {

    var validarParaSalvar = true;
    if (!this.validar_campo(this.cliente.dui)) {
      alert('El DUI debe ser numérico');
      validarParaSalvar = false;
    }

    if (!this.validar_campo(this.cliente.nit)) {
      alert('El NIT debe ser numérico');
      validarParaSalvar = false;
    }

    if (!this.validar_campo(this.cliente.telefono)) {
      alert('El Telefono debe ser numérico');
      validarParaSalvar = false;
    }

    if (!this.validar_campo(this.cliente.celular)) {
      alert('El Celular debe ser numérico');
      validarParaSalvar = false;
    }

    if (validarParaSalvar) {
      const id = this.activatedRouter.snapshot.params.id;
      this.clienteServer.update(id, this.cliente).subscribe(
        data => {
          this.toastr.success('Cliente Actualizado', 'OK', {
            timeOut: 3000, positionClass: 'toast-top-center'
          });
          this.router.navigate(['/']);
        },
        err => {
          this.toastr.error(err.error.mensaje, 'Fail', {
            timeOut: 3000, positionClass: 'toast-top-center',
          });
          this.router.navigate(['/']);
        }
      );
    }

  }

  validar_campo(numero: string): boolean {

    const pattern = /[0-9]/;

    var validacion = true;
    for (var i = 0; i < numero.length; i++) {
      if (!pattern.test(numero[i])) {
        validacion = false;
      }

    }
    return validacion;
  }

  onChange(valor: any) {
    if (valor == 'NATURAL') {
      this.vista = true;
    } else {
      this.vista = false;
    }
  }

}
