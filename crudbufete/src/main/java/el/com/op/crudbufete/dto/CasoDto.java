package el.com.op.crudbufete.dto;

import java.util.Calendar;

public class CasoDto {

    private String codigo;

    private Calendar creacion;

    private ClienteDto cliente;

    private TipoCasoDto tipoCaso;

    public CasoDto(String codigo, Calendar creacion, ClienteDto cliente, TipoCasoDto tipoCaso) {
        this.codigo = codigo;
        this.creacion = creacion;
        this.cliente = cliente;
        this.tipoCaso = tipoCaso;
    }

    public String getCodigo() {
        return codigo;
    }

    public void setCodigo(String codigo) {
        this.codigo = codigo;
    }

    public Calendar getCreacion() {
        return creacion;
    }

    public void setCreacion(Calendar creacion) {
        this.creacion = creacion;
    }

    public ClienteDto getCliente() {
        return cliente;
    }

    public void setCliente(ClienteDto cliente) {
        this.cliente = cliente;
    }

    public TipoCasoDto getTipoCaso() {
        return tipoCaso;
    }

    public void setTipoCaso(TipoCasoDto tipoCaso) {
        this.tipoCaso = tipoCaso;
    }
}
