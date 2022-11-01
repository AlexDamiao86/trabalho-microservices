import request from 'supertest';
import { app } from '../app';

describe("NOT FOUND", () => {
  it("should return 404 for non-existing route", async() => {
    const response = await request(app).get("/xpto").send();
    expect(response.status).toBe(404);
    expect(response.body).toHaveProperty("mensagem");
  });
});

describe("GET /health", () => {
  it("should return UP", async() => {
    const response = await request(app).get("/health").send();
    expect(response.status).toBe(200);
    expect(response.body).toHaveProperty("message");
    expect(response.body).toMatchObject({ message: "UP" });
  });
});
