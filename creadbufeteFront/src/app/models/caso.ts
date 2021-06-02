import { Cliente } from "./cliente";

export class Caso {

  id?: number;

  codigo: string;

  creacion: Date;

  recomendado: string;

  cliente: Cliente;

  constructor(codigo: string, creacion: Date, recomendado: string, cliente: Cliente){
    this.codigo = codigo;
    this.creacion = creacion;
    this.recomendado = recomendado;
    this.cliente = cliente;
  }
}
