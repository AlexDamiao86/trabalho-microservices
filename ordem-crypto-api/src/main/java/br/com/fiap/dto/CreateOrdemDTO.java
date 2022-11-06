package br.com.fiap.dto;

import br.com.fiap.enums.TipoOrdem;
import lombok.Getter;

@Getter
public class CreateOrdemDTO {
    private TipoOrdem tipo;
    private String codigoCriptomoeda;
    private Double precoUnitarioCriptomoeda;
    private Double quantidadeCriptomoeda;
}
