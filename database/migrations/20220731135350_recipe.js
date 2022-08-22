exports.up = function (knex) {
  return knex.schema.createTable('recipe', (table) => {
    table.string('id').primary();
    table.string('name').notNullable();
    table
      .string('user_id')
      .notNullable()
      .references('id')
      .inTable('user')
      .onDelete('CASCADE')
      .index();
    table.string('description').notNullable();
    table.timestamps(true, true);
  });
};

exports.down = function (knex) {
  return knex.schema.dropTable('comment');
};
