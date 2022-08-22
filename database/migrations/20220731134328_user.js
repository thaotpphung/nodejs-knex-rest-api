exports.up = function (knex) {
  return knex.schema.createTable('user', (table) => {
    table.string('id').primary();
    table.string('bio');
    table.string('email').notNullable().unique();
    table.string('first_name').notNullable();
    table.string('last_name').notNullable();
    table.string('password').notNullable();
    table.timestamps(true, true);
  });
};

exports.down = function (knex) {
  return knex.schema.dropTable('user');
};
