import Criptomoeda from '../models/Criptomoeda';

describe("Teste unitário Criptomoeda.ts", () => {
  it("must be possible to instantiate a new criptomoeda", () => {
    const criptomoeda = new Criptomoeda({
      codigo: "xpto",
      nome: "crypto xpto",
      descricao: "descricao xpto",
      cotacao_compra: 10,
      cotacao_venda: 11,
      variacao: 1.2,
    });
    expect(criptomoeda).not.toBeNull();
  });

  it("must be possible to access fields by their get methods", () => {
    const criptomoeda = new Criptomoeda({
      codigo: "xpto",
      nome: "crypto xpto",
      descricao: "descricao xpto",
      cotacao_compra: 10,
      cotacao_venda: 11,
      variacao: 1.2,
    });
    expect(criptomoeda.getId).not.toBeNull();
    expect(criptomoeda.getCodigo).toBe("xpto");
    expect(criptomoeda.getNome).toBe("crypto xpto");
    expect(criptomoeda.getDescricao).toBe("descricao xpto");
    expect(criptomoeda.getCotacaoCompra).toEqual(10);
    expect(criptomoeda.getCotacaoVenda).toEqual(11);
    expect(criptomoeda.getVariacao).toEqual(1.2);
    expect(criptomoeda.getTimestampAtualizacao).not.toBeNull();
  });

  it("must be possible to update crypto", () => {
    const criptomoeda = new Criptomoeda({
      codigo: "xpto",
      nome: "crypto xpto",
      descricao: "descricao xpto",
      cotacao_compra: 10,
      cotacao_venda: 11,
      variacao: 1.2,
    });
    criptomoeda.atualizarCriptomoeda({
      nome: "Nome crypto xpto"
    });
    expect(criptomoeda.getCodigo).toBe("xpto");
    expect(criptomoeda.getNome).toBe("Nome crypto xpto");
    expect(criptomoeda.getDescricao).toBeUndefined();
    expect(criptomoeda.getCotacaoCompra).toEqual(0);
    expect(criptomoeda.getCotacaoVenda).toEqual(0);
    expect(criptomoeda.getVariacao).toEqual(0);
    expect(criptomoeda.getTimestampAtualizacao).not.toBeNull();
  });

  it("must be possible to update a crypto quotation", () => {
    const criptomoeda = new Criptomoeda({
      codigo: "xpto",
      nome: "crypto xpto",
      descricao: "descricao xpto",
      cotacao_compra: 10,
      cotacao_venda: 11,
      variacao: 1.2,
    });
    criptomoeda.atualizarCotacao({
      cotacao_compra: 23,
      cotacao_venda: 22
    });
    expect(criptomoeda.getCodigo).toBe("xpto");
    expect(criptomoeda.getNome).toBe("crypto xpto");
    expect(criptomoeda.getDescricao).toBe("descricao xpto");
    expect(criptomoeda.getCotacaoCompra).toEqual(23);
    expect(criptomoeda.getCotacaoVenda).toEqual(22);
    expect(criptomoeda.getVariacao).toBeUndefined();
    expect(criptomoeda.getTimestampAtualizacao).not.toBeNull();
  });
})
