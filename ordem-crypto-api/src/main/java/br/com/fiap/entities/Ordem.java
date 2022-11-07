package br.com.fiap.entities;

import br.com.fiap.dto.CreateOrdemDTO;
import br.com.fiap.enums.SituacaoOrdem;
import br.com.fiap.enums.TipoOrdem;
import io.quarkus.hibernate.reactive.panache.PanacheEntityBase;
import lombok.Getter;
import lombok.NoArgsConstructor;
import org.hibernate.annotations.CreationTimestamp;
import org.hibernate.annotations.UpdateTimestamp;

import javax.persistence.*;

import java.math.BigDecimal;
import java.time.ZonedDateTime;
import java.util.UUID;

@Entity
@NoArgsConstructor
@Getter
public class Ordem extends PanacheEntityBase {

    public Ordem(UUID id, CreateOrdemDTO ordemDTO) {
        this.id = id;
        this.tipo = ordemDTO.getTipo();
        this.codigoCriptomoeda = ordemDTO.getCodigoCriptomoeda().toUpperCase();
        this.precoUnitarioCriptomoeda = new BigDecimal(ordemDTO.getPrecoUnitarioCriptomoeda());
        this.quantidadeCriptomoeda = new BigDecimal(ordemDTO.getQuantidadeCriptomoeda());
        this.valor = precoUnitarioCriptomoeda.multiply(quantidadeCriptomoeda);
        this.situacao = SituacaoOrdem.RECEBIDA;
    }

    @Id
    private UUID id;
    @Column(nullable = false)
    @Enumerated(EnumType.STRING)
    private TipoOrdem tipo;
    @Column(length=6, nullable = false, updatable = false)
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
    @CreationTimestamp
    public ZonedDateTime createdAt;
    @UpdateTimestamp
    public ZonedDateTime updateAt;

    // public Cliente cliente;
}
