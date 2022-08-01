exports.up = function (knex) {
  return knex.schema.createTable('post', (table) => {
    table.string('content').notNullable().unique();
    table.timestamps(true, true);
  });
};

exports.down = function (knex) {
  return knex.schema.dropTable('post');
};
