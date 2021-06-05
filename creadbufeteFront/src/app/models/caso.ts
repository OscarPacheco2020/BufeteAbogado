import { Cliente } from "./cliente";
import { TipoCaso } from "./tipo-caso";

export class Caso {

  id?: number;

  codigo: string;

  creacion: Date;

  recomendado: string;

  cliente: Cliente;

  tipoCaso: TipoCaso;

  constructor(codigo: string, creacion: Date, recomendado: string,
    cliente: Cliente, tipoCaso: TipoCaso){
    this.codigo = codigo;
    this.creacion = creacion;
    this.recomendado = recomendado;
    this.cliente = cliente;
    this.tipoCaso = tipoCaso;
  }
}
