package el.com.op.crudbufete.repository;

import el.com.op.crudbufete.model.Caso;
import el.com.op.crudbufete.model.Cliente;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface CasoRepository extends JpaRepository<Caso, Integer> {

    boolean existsByCodigo(String  codigo);

    List<Caso> findByCliente(Cliente cliente);
}
