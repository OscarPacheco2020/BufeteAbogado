package el.com.op.crudbufete.service;

import el.com.op.crudbufete.model.Cliente;
import el.com.op.crudbufete.repository.ClienteRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Service
@Transactional
public class ClienteService {

    @Autowired
    ClienteRepository clienteRepository;

    public List<Cliente> list(){
        return clienteRepository.findAll();
    }

    public Cliente getOne(Integer id){
        return clienteRepository.findById(id).orElse(null);
    }

    public void save(Cliente cliente){
        clienteRepository.save(cliente);
    }

    public void delete(Integer id){
        clienteRepository.deleteById(id);
    }

    public boolean existsById(Integer id){
        return clienteRepository.existsById(id);
    }
}
