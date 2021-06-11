export class Cliente {
    id?: number;

    nombre: string;

    tipoCliente: string;

    dui: string;

    nit: string;

    telefono: string;

    celular: string;

    direccion: string;

    recomendado: string;

    constructor(nombre: string, tipoCliente: string, dui: string,
        nit: string, telefono: string, celular: string, direccion: string,
        recomendado: string){
            this.nombre = nombre;
            this.tipoCliente = tipoCliente;
            this.dui = dui;
            this.nit = nit;
            this.telefono = telefono;
            this.celular = celular;
            this.direccion = direccion;
            this.recomendado = recomendado;
        }

}
