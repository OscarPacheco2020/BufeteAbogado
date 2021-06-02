package el.com.op.crudbufete.model;

import javax.persistence.*;
import java.util.Calendar;

@Entity
public class Caso {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;

    private String codigo;

    @Column(updatable = true, nullable = false)
    @Temporal(TemporalType.DATE)
    private Calendar creacion;

    private String recomendado;

    @ManyToOne(fetch = FetchType.EAGER)
    @JoinColumn(name = "idCliente", nullable = false)
    private Cliente cliente;

    public Caso() {
    }

    public Caso(Integer id) {
        this.id = id;
    }

    public Caso(String codigo, Calendar creacion, String recomendado, Cliente cliente) {
        this.codigo = codigo;
        this.creacion = creacion;
        this.recomendado = recomendado;
        this.cliente = cliente;
    }

    public Caso(Integer id, String codigo, Calendar creacion, String recomendado, Cliente cliente) {
        this.id = id;
        this.codigo = codigo;
        this.creacion = creacion;
        this.recomendado = recomendado;
        this.cliente = cliente;
    }

    public Integer getId() {
        return id;
    }

    public Calendar getCreacion() {
        return creacion;
    }

    public void setCreacion(Calendar creacion) {
        this.creacion = creacion;
    }

    public String getRecomendado() {
        return recomendado;
    }

    public void setRecomendado(String recomendado) {
        this.recomendado = recomendado;
    }

    public Cliente getCliente() {
        return cliente;
    }

    public void setCliente(Cliente cliente) {
        this.cliente = cliente;
    }

    public String getCodigo() {
        return codigo;
    }

    public void setCodigo(String codigo) {
        this.codigo = codigo;
    }
}
