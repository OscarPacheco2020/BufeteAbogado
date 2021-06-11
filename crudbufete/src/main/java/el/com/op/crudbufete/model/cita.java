package el.com.op.crudbufete.model;

import javax.persistence.*;
import java.util.Calendar;
import java.util.Set;

@Entity
public class cita {
    
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;

    private String descripcion;

    private String lugar;

    @Column(updatable = true, nullable = false)
    @Temporal(TemporalType.DATE)
    private Calendar fecha;

    @OneToMany(mappedBy = "tipoCaso", fetch = FetchType.EAGER)
    private Set<Caso> casos;
}
