package el.com.op.crudbufete.service;

import el.com.op.crudbufete.model.Caso;
import el.com.op.crudbufete.model.Cliente;
import el.com.op.crudbufete.model.TipoCaso;
import el.com.op.crudbufete.repository.CasoRepository;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;


@Service
@Transactional
public class CasoService {

    @Autowired
    CasoRepository casoRepository;

    public Page<Caso> list(Pageable pageable){
        return casoRepository.findAll(pageable);
    }

    public Caso getOne(Integer id){
        return casoRepository.findById(id).orElse(null);
    }

    public void save(Caso caso){
        casoRepository.save(caso);
    }

    public void delete(Integer id){
        casoRepository.deleteById(id);
    }

    public boolean existsById(Integer id){
        return casoRepository.existsById(id);
    }

    public Page<Caso> listByCliente(Pageable pageable, Cliente cliente){
        return casoRepository.findByCliente(pageable, cliente);
    }

    public boolean existeByCodigo(String codigo){
        return casoRepository.existsByCodigo(codigo);
    }

    public List<Caso> listByTipoCaso(TipoCaso tipoCaso){
        return casoRepository.findByTipoCaso(tipoCaso);
    }

    public void updateAllList(List<Caso> casos){
        casoRepository.saveAll(casos);
    }
}
