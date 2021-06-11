package el.com.op.crudbufete.model;

import el.com.op.crudbufete.enums.TipoCliente;

import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;

import javax.persistence.*;
import java.util.Set;

@Entity
public class Cliente {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;

    private String nombre;

    @Enumerated(EnumType.STRING)
    private TipoCliente tipoCliente;

    private String recomendado;

    private String dui;

    private String nit;

    private String telefono;

    private String celular;

    private String direccion;

    @OneToMany(cascade = {CascadeType.ALL}, mappedBy = "cliente", fetch = FetchType.EAGER)
    private Set<Caso> casos;

    public Cliente() {
    }

    public Cliente(String nombre, TipoCliente tipoCliente, String dui, String nit, 
                   String telefono, String celular, String direccion, String recomendado) {
        this.nombre = nombre;
        this.tipoCliente = tipoCliente;
        this.dui = dui;
        this.nit = nit;
        this.telefono = telefono;
        this.celular = celular;
        this.direccion = direccion;
        this.recomendado = recomendado;
    }

    public Cliente(Integer id, String nombre, TipoCliente tipoCliente, 
                   String dui, String nit, String telefono, String celular, String direccion,
                   String recomendado) {
        this.id = id;
        this.nombre = nombre;
        this.tipoCliente = tipoCliente;
        this.dui = dui;
        this.nit = nit;
        this.telefono = telefono;
        this.celular = celular;
        this.direccion = direccion;
        this.recomendado = recomendado;
    }

    public Integer getId() {
        return id;
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

    public String getRecomendado() {
        return recomendado;
    }

    public void setRecomendado(String recomendado) {
        this.recomendado = recomendado;
    }
    
}
