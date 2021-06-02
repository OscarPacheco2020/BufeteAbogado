package el.com.op.crudbufete.controller;

import el.com.op.crudbufete.dto.CasoDto;
import el.com.op.crudbufete.dto.ClienteDto;
import el.com.op.crudbufete.dto.Mensaje;
import el.com.op.crudbufete.model.Caso;
import el.com.op.crudbufete.model.Cliente;
import el.com.op.crudbufete.service.CasoService;
import el.com.op.crudbufete.service.ClienteService;
import org.apache.commons.lang3.StringUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Sort;

import java.util.List;

@RestController
@RequestMapping("/caso")
@CrossOrigin(origins = "http://localhost:4200")
public class CasoControler {

    @Autowired
    ClienteService clienteService;

    @Autowired
    CasoService casoService;

    @GetMapping("/")
    public ResponseEntity<List<Caso>> paginas(){
        List<Caso> casos = casoService.list();
        return new ResponseEntity<List<Caso>>(casos, HttpStatus.OK);
    }

    @GetMapping("/{id}")
    public ResponseEntity<Caso> getById(@PathVariable("id") Integer id){
        if(!casoService.existsById(id))
            return new ResponseEntity(new Mensaje("No existe"), HttpStatus.NOT_FOUND);
        Caso caso = casoService.getOne(id);
        return new ResponseEntity(caso, HttpStatus.OK);
    }

    @PostMapping("/")
    public ResponseEntity<?> create(@RequestBody CasoDto casoDto){

        if(!clienteService.existsById(casoDto.getCliente().getId()))
            return new ResponseEntity(new Mensaje("No existe Cliente"), HttpStatus.NOT_FOUND);

        if(casoService.existeByCodigo(casoDto.getCodigo()))
            return new ResponseEntity(new Mensaje("El Codigo ya existe"), HttpStatus.NOT_FOUND);

        Caso caso = new Caso();
        caso.setCodigo(casoDto.getCodigo());
        caso.setRecomendado(casoDto.getRecomendado());
        caso.setCreacion(casoDto.getCreacion());

        Cliente cliente = clienteService.getOne(casoDto.getCliente().getId());
        caso.setCliente(cliente);

        casoService.save(caso);
        return new ResponseEntity(new Mensaje("Caso creado"), HttpStatus.OK);
    }

    @PutMapping("/{id}")
    public ResponseEntity<?> update(@PathVariable("id")Integer id, @RequestBody CasoDto casoDto){
        if(!casoService.existsById(id))
            return new ResponseEntity(new Mensaje("No existe"), HttpStatus.NOT_FOUND);

        Caso casoOld = casoService.getOne(id);

        if(!casoOld.getCodigo().equals(casoDto.getCodigo())){
            if(casoService.existeByCodigo(casoDto.getCodigo()))
                return new ResponseEntity(new Mensaje("El Codigo ya existe"), HttpStatus.NOT_FOUND);
        }


        Cliente cliente = clienteService.getOne(casoDto.getCliente().getId());

        Caso caso = casoService.getOne(id);
        caso.setCodigo(casoDto.getCodigo());
        caso.setRecomendado(casoDto.getRecomendado());
        caso.setCreacion(casoDto.getCreacion());
        caso.setCliente(cliente);

        casoService.save(caso);

        return new ResponseEntity(new Mensaje("Caso actualizado"), HttpStatus.OK);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<?> delete(@PathVariable("id")Integer id){
        if(!casoService.existsById(id))
            return new ResponseEntity(new Mensaje("No existe"), HttpStatus.NOT_FOUND);
        casoService.delete(id);
        return new ResponseEntity(new Mensaje("Caso eliminado"), HttpStatus.OK);
    }

    @GetMapping("/cliente/{id}")
    public ResponseEntity<List<Caso>> listaByCliente(@PathVariable("id") Integer id){

        if(!clienteService.existsById(id))
            return new ResponseEntity(new Mensaje("No existe Cliente"), HttpStatus.NOT_FOUND);

        Cliente cliente = clienteService.getOne(id);

        List<Caso> casos = casoService.listByCliente(cliente);
        return new ResponseEntity<List<Caso>>(casos, HttpStatus.OK);
    }

}
