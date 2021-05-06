import { Component, OnInit } from '@angular/core';
import { Cliente } from '../models/cliente';
import { ClienteService } from '../service/cliente.service';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';

interface Tipo {
  value: string;
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

  dui: string = '';

  nit: string = '';

  telefono: string = '';

  celular: string = '';

  direccion: string;

  vista: boolean = true;

  tipos: Tipo[] = [
    {value: 'NATURAL'},
    {value: 'LEGAL'},
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

      var validarParaSalvar = true;
      if(!this.validar_campo(this.dui)){
        alert('El DUI debe ser numérico');
        validarParaSalvar = false;
      }

      if(!this.validar_campo(this.nit)){
        alert('El NIT debe ser numérico');
        validarParaSalvar = false;
      }

      if(!this.validar_campo(this.telefono)){
        alert('El Telefono debe ser numérico');
        validarParaSalvar = false;
      }

      if(!this.validar_campo(this.celular)){
        alert('El Celular debe ser numérico');
        validarParaSalvar = false;
      }

      if(validarParaSalvar){
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

   validar_campo(numero: string): boolean{

    const pattern = /[0-9]/;

    var validacion =  true;
   for(var i = 0; i < numero.length; i++){
     if(!pattern.test(numero[i])){
       validacion = false;
     }

   }
   return validacion;
   }

   onChange(valor: any){
    if(valor == 'NATURAL'){
      this.vista = true;
    }else{
      this.vista = false;
    }
   }
}
