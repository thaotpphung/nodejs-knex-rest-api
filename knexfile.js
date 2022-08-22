const config = require('./src/config');

module.exports = {
  client: 'pg',
  connection: {
    host: config.db.host,
    user: config.db.user,
    port: config.db.port,
    password: config.db.password,
    database: config.db.name,
    // config.db.ssl && ssl: { rejectUnauthorized: false },
  },
  migrations: {
    directory: `${__dirname}/database/migrations`,
  },
  seeds: {
    directory: `${__dirname}/database/seeds`,
  },
  pool: { min: 0, max: 10 },
};
