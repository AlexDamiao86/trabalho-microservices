import request from 'supertest';
import { app } from '../app';

describe("GET /criptomoedas", () => {
  it("should return 200", async() => {
    const response = await request(app).get("/criptomoedas").send();
    expect(response.status).toBe(200);
  });

  it("should return an empty array", async() => {
    const response = await request(app).get("/criptomoedas").send();
    expect(response.body).toEqual([]);
  });

  it("should return 200 and some content after a crypto has been created", async() => {
    return request(app).post("/criptomoedas").send({
      codigo: "tst1",
      nome: "test crypto 1"
    }).expect(201).then(async () => {
        const response = await request(app).get("/criptomoedas").send();
        expect(response.body).toHaveLength(1);
      });
  });

});

describe("GET /criptomoedas/{codigo}", () => {
  it("should return 404 when crypto not found", async() => {
    const response = await request(app).get("/criptomoedas/test").send();
    expect(response.status).toBe(404);
  });

  it("should return 200 and a crypto", async() => {
    const response = await request(app).get("/criptomoedas/tst1").send();
    expect(response.status).toBe(200);
    expect(response.body).toMatchObject({ codigo: "TST1" });
  })
});

describe("POST /criptomoedas", () => {
  it("should return 422 when missing required field", async() => {
    const response = await request(app).post("/criptomoedas").send({
      codigo: "tst2"
    });
    expect(response.status).toBe(422);
  })

  it("should return 201 after creating a crypto", async() => {
    const response = await request(app).post("/criptomoedas").send({
      codigo: "tst3",
      nome: "test crypto 3"
    });
    expect(response.status).toBe(201);
  });

  it("should return 406 when attempting to insert an existing crypto", async() => {
    const response = await request(app).post("/criptomoedas").send({
      codigo: "tst3",
      nome: "test crypto 3"
    });
    expect(response.status).toBe(406);
  });
});

describe("PATCH /criptomoedas/{codigo}", () => {
  it("should return 404 when crypto not found", async() => {
    const response = await request(app).patch("/criptomoedas/xpto").send({
      cotacao_compra: 1.5,
      cotacao_venda: 1.4
    });
    expect(response.status).toBe(404);
  });

  it("should return 422 when missing required field", async() => {
    const response = await request(app).patch("/criptomoedas/tst3").send({
      cotacao_compra: 0
    });
    expect(response.status).toBe(422);
  })

  it("should return 200 after updating quote", async() => {
    const response = await request(app).patch("/criptomoedas/tst3").send({
      cotacao_compra: 11,
      cotacao_venda: 10,
      variacao: 1.3
    });
    expect(response.status).toBe(200);
    expect(response.body).toMatchObject({ codigo: "TST3" });
  })
})

describe("PUT /criptomoedas/{codigo}", () => {
  it("should return 404 when crypto not found", async() => {
    const response = await request(app).put("/criptomoedas/xpto").send({
      nome: "xpto"
    });
    expect(response.status).toBe(404);
  });

  it("should return 422 when missing required field", async() => {
    const response = await request(app).put("/criptomoedas/tst3").send({
      cotacao_compra: 0
    });
    expect(response.status).toBe(422);
  })

  it("should return 200 after updating quote", async() => {
    const response = await request(app).put("/criptomoedas/tst3").send({
      nome: "Token tst3",
      descricao: "altera descricao tst3",
      cotacao_compra: 121,
      cotacao_venda: 103,
      variacao: -23.3
    });
    expect(response.status).toBe(200);
    expect(response.body).toMatchObject({ codigo: "TST3" });
  })
})

describe("DELETE /criptomoedas/{codigo}", () => {
  it("should return 404 when crypto not found", async() => {
    const response = await request(app).delete("/criptomoedas/xpto").send();
    expect(response.status).toBe(404);
  });

  it("should return 204 after deleting crypto", async() => {
    const response = await request(app).delete("/criptomoedas/tst3").send();
    expect(response.status).toBe(204);
  })
})

