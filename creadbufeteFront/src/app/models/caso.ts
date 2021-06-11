import { Cliente } from "./cliente";
import { TipoCaso } from "./tipo-caso";

export class Caso {

  id?: number;

  codigo: string;

  creacion: Date;

  cliente: Cliente;

  tipoCaso: TipoCaso;

  constructor(codigo: string, creacion: Date,
    cliente: Cliente, tipoCaso: TipoCaso){
    this.codigo = codigo;
    this.creacion = creacion;
    this.cliente = cliente;
    this.tipoCaso = tipoCaso;
  }
}
