const config = require('./config');

module.exports = {
  client: 'pg',
  connection: {
    host: config.db.host,
    user: config.db.user,
    port: config.db.port,
    password: null,
    database: config.db.name,
  },
  migrations: {
    directory: `${__dirname}/db/migrations`,
  },
  seeds: {
    directory: `${__dirname}/db/seeds`,
  },
  pool: { min: 0, max: 10 },
};
