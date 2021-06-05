package el.com.op.crudbufete.controller;

import el.com.op.crudbufete.dto.ClienteDto;
import el.com.op.crudbufete.dto.Mensaje;
import el.com.op.crudbufete.model.Cliente;
import el.com.op.crudbufete.service.ClienteService;
import org.apache.commons.lang3.StringUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Sort;

@RestController
@RequestMapping("/api/v1.0/cliente")
@CrossOrigin(origins = "http://localhost:4200")
public class ClienteControler {

    @Autowired
    ClienteService clienteService;

    @GetMapping("/")
    public ResponseEntity<Page<Cliente>> paginas(
            @RequestParam(defaultValue = "0") int page,
            @RequestParam(defaultValue = "10") int size,
            @RequestParam(defaultValue = "nombre") String order,
            @RequestParam(defaultValue = "true") boolean asc
    ){
        Page<Cliente> clientes = clienteService.list(
                PageRequest.of(page, size, Sort.by(order)));
        if(!asc)
            clientes = clienteService.list(
                    PageRequest.of(page, size, Sort.by(order).descending()));

        return new ResponseEntity<Page<Cliente>>(clientes, HttpStatus.OK);
    }

    @GetMapping("/{id}")
    public ResponseEntity<Cliente> getById(@PathVariable("id") Integer id){
       if(!clienteService.existsById(id))
            return new ResponseEntity(new Mensaje("No existe"), HttpStatus.NOT_FOUND);
        Cliente cliente = clienteService.getOne(id);
        return new ResponseEntity(cliente, HttpStatus.OK);
    }

    @PostMapping("/")
    public ResponseEntity<?> create(@RequestBody ClienteDto clienteDto){
        if(StringUtils.isBlank(clienteDto.getNombre()))
            return new ResponseEntity(new Mensaje("El nombre es obligatorio"), HttpStatus.BAD_REQUEST);

        Cliente cliente = new Cliente(clienteDto.getNombre(),
                clienteDto.getTipoCliente(), clienteDto.getDui(), clienteDto.getNit(),
                clienteDto.getTelefono(), clienteDto.getCelular(), clienteDto.getDireccion());
        clienteService.save(cliente);
        return new ResponseEntity(new Mensaje("Cliente creado"), HttpStatus.OK);
    }

    @PutMapping("/{id}")
    public ResponseEntity<?> update(@PathVariable("id")Integer id, @RequestBody ClienteDto clienteDto){
        if(!clienteService.existsById(id))
            return new ResponseEntity(new Mensaje("No existe"), HttpStatus.NOT_FOUND);
        if(StringUtils.isBlank(clienteDto.getNombre()))
            return new ResponseEntity(new Mensaje("El nombre es obligatorio"), HttpStatus.BAD_REQUEST);
        Cliente cliente = clienteService.getOne(id);
        cliente.setNombre(clienteDto.getNombre());
        cliente.setTipoCliente(clienteDto.getTipoCliente());
        cliente.setDui(clienteDto.getDui());
        cliente.setNit(clienteDto.getNit());
        cliente.setTelefono(clienteDto.getTelefono());
        cliente.setCelular(clienteDto.getCelular());
        cliente.setDireccion(clienteDto.getDireccion());
        clienteService.save(cliente);
        return new ResponseEntity(new Mensaje("Cliente actualizado"), HttpStatus.OK);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<?> delete(@PathVariable("id")Integer id){
        if(!clienteService.existsById(id))
            return new ResponseEntity(new Mensaje("No existe"), HttpStatus.NOT_FOUND);
        clienteService.delete(id);
        return new ResponseEntity(new Mensaje("Cliente eliminado"), HttpStatus.OK);
    }
}
