# Be The Hero OmniStack 11.0
## Aplicação construida com NODE.JS para o Backend, REACT JS para web e REACT NATIVE para mobile.
### Backend
Começando pelo Backend `NODE.JS`, no conceito de `API REST` utilizando o BANCO DE DADOS `SQLite` juntamente com um `QUERY BUILDER` chamado `KNEX`,
Responsável pela conexão e manipulação do `SQLite` dentro da aplicação, 
também testes unitários e de integração com `SUPERTEST` e várias outras tecnologias como: 
`NODEMON`: Para facilitar o restart da aplicação em desenvolvimento.
`CRYPTO`: Responsável por gerar o ID random da ONG.
`CORS`: Permite que outros domínios consigam acessar a aplicação.
`CELEBRATE`: Para validação de dados da aplicação.

### Frontend
No Frontend `React.JS`, usando `AXIOS` para conexão com a API. Para manipulação de rotas foi usado o react-router-dom com LINK e HISTORY
`HOOKS` com `useState e useEffect`
E o INTL que serve para formatação da MOEDA

### Mobile
E o Mobile, `React Native` com `EXPO`
Também usando AXIOS para conexão com a API
`HOOKS, FLATLIST, REACT-NAVIGATION, INTL` e por fim o mais legal dessa aplicação mobile, 
a utilização de APPS externos, WHATSAPP e E-MAIL com um texto pré configurado para o envio da mensagem usando o `EXPO-MAIL-COMPOSER`.
