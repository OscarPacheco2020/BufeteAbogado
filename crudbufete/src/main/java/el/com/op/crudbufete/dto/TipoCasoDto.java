package el.com.op.crudbufete.dto;

public class TipoCasoDto {

    private Integer id;

    private String nombre;

    public TipoCasoDto() {
    }

    public TipoCasoDto(String nombre) {
        this.nombre = nombre;
    }

    public TipoCasoDto(Integer id, String nombre) {
        this.id = id;
        this.nombre = nombre;
    }

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getNombre() {
        return nombre;
    }

    public void setNombre(String nombre) {
        this.nombre = nombre;
    }
}
