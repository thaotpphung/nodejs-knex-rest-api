const convict = require('convict');

const config = convict({
  port: {
    doc: 'The port to bind.',
    format: 'port',
    default: 5000,
    env: 'PORT',
  },
  db: {
    host: {
      doc: 'Database host name/IP',
      format: '*',
      default: 'localhost',
      env: 'DB_HOST',
    },
    name: {
      doc: 'Database name',
      format: String,
      default: 'node_dependency_injection',
      env: 'DB_NAME',
    },
    user: {
      doc: 'Database user',
      format: String,
      default: 'postgres',
      env: 'DB_USER',
    },
    port: {
      doc: 'database port',
      format: 'port',
      default: 5432,
      env: 'DB_PORT',
    },
    password: {
      doc: 'database password',
      format: '*',
      default: 'password',
      env: 'DB_PASSWORD',
    },
  },
});

config.validate({ allowed: 'strict' });

module.exports = {
  ...config.getProperties(),
};
