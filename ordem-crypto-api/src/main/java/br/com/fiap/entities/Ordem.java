package br.com.fiap.entities;

import br.com.fiap.enums.SituacaoOrdem;
import br.com.fiap.enums.TipoOrdem;
import io.quarkus.hibernate.reactive.panache.PanacheEntityBase;
import org.hibernate.annotations.CreationTimestamp;
import org.hibernate.annotations.UpdateTimestamp;

import javax.json.bind.annotation.JsonbDateFormat;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import java.math.BigDecimal;
import java.time.ZonedDateTime;
import java.util.UUID;

@Entity
public class Ordem extends PanacheEntityBase {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    public UUID id;

    public TipoOrdem tipo;
    public String codigoCriptomoeda;
    public BigDecimal precoUnitarioCriptomoeda; // price
    public Double quantidadeCriptomoeda; // amount
    public BigDecimal valor; // volume = (price * amount)
    public SituacaoOrdem situacao;

    @JsonbDateFormat("yyyy-MM-dd'T'HH:mm:ss'Z'")
    @CreationTimestamp
    public ZonedDateTime createdAt;

    @JsonbDateFormat("yyyy-MM-dd'T'HH:mm:ss'Z'")
    @UpdateTimestamp
    public ZonedDateTime updateAt;

    public Cliente cliente;

}
