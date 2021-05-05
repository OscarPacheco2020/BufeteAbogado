export class Cliente {
    id?: number;

    nombre: string;

    apellido: string;

    tipoCliente: string;

    dui: string;

    nit: string;

    telefono: string;

    celular: string;

    direccion: string;

    constructor(nombre: string, apellido: string, tipoCliente: string, dui: string, 
        nit: string, telefono: string, celular: string, direccion: string,){
            this.nombre = nombre;
            this.apellido = apellido;
            this.tipoCliente = tipoCliente;
            this.dui = dui;
            this.nit = nit;
            this.telefono = telefono;
            this.celular = celular;
            this.direccion = direccion;
        }
}
