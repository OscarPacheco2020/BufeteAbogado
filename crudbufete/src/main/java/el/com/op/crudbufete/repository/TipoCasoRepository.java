package el.com.op.crudbufete.repository;

import el.com.op.crudbufete.model.TipoCaso;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface TipoCasoRepository extends JpaRepository<TipoCaso, Integer>{

    boolean existsByNombre(String  nombre);

}
