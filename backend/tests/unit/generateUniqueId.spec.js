const generateUniqueId = require('../../src/utils/generateUniqueId'); // Gera o ID random da ONG

describe('Generate Unique ID', () => { // Teste unitário para verificação de ID
  it('should generate an unique ID', () => {
    const id = generateUniqueId();

    expect(id).toHaveLength(8);
  });
});