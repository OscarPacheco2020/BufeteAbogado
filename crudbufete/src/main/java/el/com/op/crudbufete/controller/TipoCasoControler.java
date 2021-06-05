package el.com.op.crudbufete.controller;

import el.com.op.crudbufete.dto.Mensaje;
import el.com.op.crudbufete.dto.TipoCasoDto;
import el.com.op.crudbufete.model.TipoCaso;
import el.com.op.crudbufete.service.TipoCasoService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/v1.0/tipoCaso")
@CrossOrigin(origins = "http://localhost:4200")
public class TipoCasoControler {

    @Autowired
    TipoCasoService tipoCasoService;

    @GetMapping("/")
    public ResponseEntity<List<TipoCaso>> paginas(){

        List<TipoCaso> tipoCasos = tipoCasoService.list();

        return new ResponseEntity<List<TipoCaso>>(tipoCasos, HttpStatus.OK);
    }

    @GetMapping("/{id}")
    public ResponseEntity<TipoCaso> getById(@PathVariable("id") Integer id){
        if(!tipoCasoService.existsById(id))
            return new ResponseEntity(new Mensaje("No existe"), HttpStatus.NOT_FOUND);

        TipoCaso tipoCaso = tipoCasoService.getOne(id);
        return new ResponseEntity(tipoCaso, HttpStatus.OK);
    }

    @PostMapping("/")
    public ResponseEntity<TipoCaso> create(@RequestBody TipoCasoDto tipocasoDto){
        if(tipoCasoService.existsByNombre(tipocasoDto.getNombre()))
            return new ResponseEntity(new Mensaje("El nombre de tipo de caso ya existe"), HttpStatus.NOT_FOUND);

        TipoCaso tipoCaso = tipoCasoService.save(new TipoCaso(tipocasoDto.getNombre()));

        return new ResponseEntity(tipoCaso, HttpStatus.OK);
    }

    @PutMapping("/{id}")
    public ResponseEntity<?> update(@PathVariable("id")Integer id, @RequestBody TipoCasoDto tipoCasoDto){
        if(!tipoCasoService.existsById(id))
            return new ResponseEntity(new Mensaje("No existe"), HttpStatus.NOT_FOUND);

        TipoCaso TipoCasoOld = tipoCasoService.getOne(id);

        if(!TipoCasoOld.getNombre().equals(tipoCasoDto.getNombre())){
            if(tipoCasoService.existsByNombre(tipoCasoDto.getNombre()))
                return new ResponseEntity(new Mensaje("El Nombre de tipo ya existe"), HttpStatus.NOT_FOUND);
        }

        TipoCaso tipoCaso = tipoCasoService.getOne(id);

        tipoCaso.setNombre(tipoCasoDto.getNombre());

        tipoCasoService.update(tipoCaso);

        return new ResponseEntity(new Mensaje("Tipo de Caso actualizado"), HttpStatus.OK);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<?> delete(@PathVariable("id")Integer id){
        if(!tipoCasoService.existsById(id))
            return new ResponseEntity(new Mensaje("No existe"), HttpStatus.NOT_FOUND);
        tipoCasoService.delete(id);
        return new ResponseEntity(new Mensaje("Tipo de Caso eliminado"), HttpStatus.OK);
    }
}
