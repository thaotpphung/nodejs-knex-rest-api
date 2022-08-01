exports.up = function (knex) {
  return knex.schema.createTable('developer', (table) => {
    table.increments('id');
    table.string('email').notNullable().unique();
    table.string('first_name').notNullable();
    table.string('last_name').notNullable();
    table.string('middle_names').notNullable();
    table.timestamps(true, true);
  });
};

exports.down = function (knex) {
  return knex.schema.dropTable('developer');
};
