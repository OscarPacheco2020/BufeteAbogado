package el.com.op.crudbufete.dto;

import el.com.op.crudbufete.enums.TipoCliente;
import javax.validation.constraints.NotBlank;

public class ClienteDto {

    @NotBlank
    private String nombre;

    private TipoCliente tipoCliente;

    private String dui;

    private String nit;

    private String telefono;

    private String celular;

    private String direccion;

    public ClienteDto() {
    }

    public ClienteDto(String nombre, TipoCliente tipoCliente, String dui, String nit, String telefono, String celular, String direccion) {
        this.nombre = nombre;
        this.tipoCliente = tipoCliente;
        this.dui = dui;
        this.nit = nit;
        this.telefono = telefono;
        this.celular = celular;
        this.direccion = direccion;
    }

    public String getNombre() {
        return nombre;
    }

    public void setNombre(String nombre) {
        this.nombre = nombre;
    }

    public TipoCliente getTipoCliente() {
        return tipoCliente;
    }

    public void setTipoCliente(TipoCliente tipoCliente) {
        this.tipoCliente = tipoCliente;
    }

    public String getDui() {
        return dui;
    }

    public void setDui(String dui) {
        this.dui = dui;
    }

    public String getNit() {
        return nit;
    }

    public void setNit(String nit) {
        this.nit = nit;
    }

    public String getTelefono() {
        return telefono;
    }

    public void setTelefono(String telefono) {
        this.telefono = telefono;
    }

    public String getCelular() {
        return celular;
    }

    public void setCelular(String celular) {
        this.celular = celular;
    }

    public String getDireccion() {
        return direccion;
    }

    public void setDireccion(String direccion) {
        this.direccion = direccion;
    }
}
