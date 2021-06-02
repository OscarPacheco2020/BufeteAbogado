package el.com.op.crudbufete.service;

import el.com.op.crudbufete.model.Caso;
import el.com.op.crudbufete.model.Cliente;
import el.com.op.crudbufete.repository.CasoRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

import java.util.List;

@Service
@Transactional
public class CasoService {

    @Autowired
    CasoRepository casoRepository;

    public List<Caso> list(){
        return casoRepository.findAll();
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

    public List<Caso> listByCliente(Cliente cliente){
        return casoRepository.findByCliente(cliente);
    }

    public boolean existeByCodigo(String codigo){
        return casoRepository.existsByCodigo(codigo);
    }
}
