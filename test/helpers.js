const knex = require('../database');

if (process.env.NODE_ENV === 'test') {
  beforeEach(() =>
    knex.migrate
      .rollback()
      .then(() => knex.migrate.latest())
      .then(() => knex.seed.run())
  );

  after(() => knex.migrate.rollback().then(() => {}));
}
