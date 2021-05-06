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

  tipos: Tipo[] = [
    {value: 'NATURAL'},
    {value: 'LEGAL'},
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
      },
      err => {
        this.toastr.error(err.error.mensaje, 'Fail', {
          timeOut: 3000,  positionClass: 'toast-top-center',
        });
        this.router.navigate(['/']);
      }
    );
  }

  onUpdate(): void{
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
          timeOut: 3000,  positionClass: 'toast-top-center',
        });
        this.router.navigate(['/']);
      }
    );
  }

}
