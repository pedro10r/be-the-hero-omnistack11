const request = require('supertest'); // Realização de testes de integração e unitários
const app = require('../../src/app');
const connection = require('../../src/database/connection'); // Importando conexão com o banco de dados

describe('ONG', () => { // Desfaz a última migrate TEST e cria uma nova migrate em seguida.
  beforeEach(async () => {
    await connection.migrate.rollback();
    await connection.migrate.latest();
  });

  afterAll(async () => {
    await connection.destroy();
  });

  it('should be able to create a new ONG', async () => { // Teste de integração
    const response = await request(app)
      .post('/ongs')
      .send({
        name: "APAD3",
        email: "contato@contato.com",
        whatsapp: "9999999999",
        city: "Brodowski",
        uf: "SP"
      })

    expect(response.body).toHaveProperty('id');
    expect(response.body.id).toHaveLength(8);
  });
});