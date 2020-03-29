const express = require('express');
const cors = require('cors'); // Permite com que outros domínios acessem a aplicação
const { errors } = require('celebrate'); // Faz a validação de dados da aplicação
const routes = require('./routes');

const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);
app.use(errors());

module.exports = app;