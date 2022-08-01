exports.up = function (knex) {
  return knex.schema.createTable('comment', (table) => {
    table.string('content').notNullable().unique();
    table
      .integer('user_id')
      .notNullable()
      .references('id')
      .inTable('developer')
      .onDelete('CASCADE')
      .index();
    table.timestamps(true, true);
  });
};

exports.down = function (knex) {
  return knex.schema.dropTable('comment');
};
