package el.com.op.crudbufete.model;

import javax.persistence.*;
import java.util.Set;

@Entity
public class TipoCaso {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;

    private String nombre;

    @OneToMany(mappedBy = "tipoCaso", fetch = FetchType.EAGER)
    private Set<Caso> casos;

    public TipoCaso() {
    }

    public TipoCaso(String nombre) {
        this.nombre = nombre;
    }

    public TipoCaso(Integer id, String nombre) {
        this.id = id;
        this.nombre = nombre;
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
}
