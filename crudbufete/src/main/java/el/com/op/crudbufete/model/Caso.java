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

    @ManyToOne(fetch = FetchType.EAGER)
    @JoinColumn(name = "idCliente", nullable = false)
    private Cliente cliente;

    @ManyToOne(fetch = FetchType.EAGER)
    @JoinColumn(name = "idTipoCaso", nullable = false)
    private TipoCaso tipoCaso;

    public Caso() {
    }

    public Caso(Integer id) {
        this.id = id;
    }

    public Caso(String codigo, Calendar creacion, Cliente cliente, TipoCaso tipoCaso) {
        this.codigo = codigo;
        this.creacion = creacion;
        this.cliente = cliente;
        this.tipoCaso = tipoCaso;
    }

    public Caso(Integer id, String codigo, Calendar creacion, String recomendado, Cliente cliente, TipoCaso tipoCaso) {
        this.id = id;
        this.codigo = codigo;
        this.creacion = creacion;
        this.cliente = cliente;
        this.tipoCaso = tipoCaso;
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

    public TipoCaso getTipoCaso() {
        return tipoCaso;
    }

    public void setTipoCaso(TipoCaso tipoCaso) {
        this.tipoCaso = tipoCaso;
    }
}
