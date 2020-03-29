const crypto = require('crypto'); // O Crypto cria um ID random (nesse caso com o tamanho de 4 Bytes)

module.exports = function generateUniqueId() {
  return crypto.randomBytes(4).toString('HEX');
}