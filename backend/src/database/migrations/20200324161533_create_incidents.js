exports.up = function (knex) { // Método UP => reponsável pela criação da tabela 
  return knex.schema.createTable('incidents', function (table) {
    table.increments();

    table.string('title').notNullable();
    table.string('description').notNullable();
    table.decimal('value').notNullable();

    table.string('ong_id').notNullable();

    table.foreign('ong_id').references('id').inTable('ongs'); // Usando chave estragengeira
  });
};

exports.down = function (knex) { // Método DOWN => reponsável por deletar uma tabela
  return knex.schema.dropTable('incidents');
};
