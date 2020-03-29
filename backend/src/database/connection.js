const knex = require('knex'); // O Knex é um query builder responsável pela manipulação do banco de dados (SQLite)
const configuration = require('../../knexfile'); // Config do Knex

// Conexão com o banco de dados (SQLite)
const config = process.env.NODE_ENV === 'test' ? configuration.test : configuration.development;

const connection = knex(config);

module.exports = connection;