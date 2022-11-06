package br.com.fiap.entities;

import br.com.fiap.dto.CreateOrdemDTO;
import br.com.fiap.enums.SituacaoOrdem;
import br.com.fiap.enums.TipoOrdem;
import io.quarkus.hibernate.reactive.panache.PanacheEntity;
import io.quarkus.hibernate.reactive.panache.PanacheEntityBase;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;

import java.math.BigDecimal;
import java.util.UUID;

@Entity
@NoArgsConstructor
@Getter
public class Ordem extends PanacheEntityBase {

//    public Ordem(UUID id, CreateOrdemDTO ordemDTO) {
//        this.id = id;
//        this.tipo = ordemDTO.getTipo();
//        this.codigoCriptomoeda = ordemDTO.getCodigoCriptomoeda();
//        this.precoUnitarioCriptomoeda = new BigDecimal(ordemDTO.getPrecoUnitarioCriptomoeda());
//        this.quantidadeCriptomoeda = new BigDecimal(ordemDTO.getQuantidadeCriptomoeda());
//        this.valor = precoUnitarioCriptomoeda.multiply(quantidadeCriptomoeda);
//        this.situacao = SituacaoOrdem.RECEBIDA;
//    }

    @Id @Setter
    private UUID id;
    @Column(nullable = false)
    @Enumerated(EnumType.STRING)
    private TipoOrdem tipo;
    @Column(length=6, nullable = false, updatable = false, unique=true)
    private String codigoCriptomoeda;
    @Column(nullable = false, scale = 6, precision = 18)
    private BigDecimal precoUnitarioCriptomoeda; // price
    @Column(nullable = false, scale = 6, precision = 18)
    private BigDecimal quantidadeCriptomoeda; // amount
    @Column(nullable = false, scale = 6, precision = 18)
    private BigDecimal valor; // volume = (price * amount)
    @Enumerated(EnumType.STRING)
    @Column(nullable = false)
    private SituacaoOrdem situacao;

//    @JsonbDateFormat("yyyy-MM-dd'T'HH:mm:ss'Z'")
//    @CreationTimestamp
//    public ZonedDateTime createdAt;
//
//    @JsonbDateFormat("yyyy-MM-dd'T'HH:mm:ss'Z'")
//    @UpdateTimestamp
//    public ZonedDateTime updateAt;
//
//    public Cliente cliente;

}
