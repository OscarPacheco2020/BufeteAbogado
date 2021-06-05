package el.com.op.crudbufete.service;

import el.com.op.crudbufete.model.TipoCaso;
import el.com.op.crudbufete.repository.TipoCasoRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Service
@Transactional
public class TipoCasoService {

    @Autowired
    TipoCasoRepository tipoCasoRepository;

    public List<TipoCaso>  list(){
        return tipoCasoRepository.findAll();
    }

    public TipoCaso getOne(Integer id){
        return tipoCasoRepository.findById(id).orElse(null);
    }

    public TipoCaso save(TipoCaso tipoCaso){
        return tipoCasoRepository.save(tipoCaso);
    }

    public void update(TipoCaso tipoCaso){
        tipoCasoRepository.save(tipoCaso);
    }

    public void delete(Integer id){
        tipoCasoRepository.deleteById(id);
    }

    public boolean existsById(Integer id){
        return tipoCasoRepository.existsById(id);
    }

    public boolean existsByNombre(String nombre){
        return tipoCasoRepository.existsByNombre(nombre);
    }

}
