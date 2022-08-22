const dotenv = require('dotenv');
const path = require('path');

// test, local, staging, production
switch (process.env.NODE_ENV) {
  case 'local':
  case 'test':
    dotenv.config({
      path: path.resolve(__dirname, `env.${process.env.NODE_ENV}`),
    });
    break;
  default:
    dotenv.config();
    break;
}

module.exports = {
  env: process.env.NODE_ENV,
  port: process.env.PORT,
  db: {
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    port: process.env.DB_PORT,
    name: process.env.DB_NAME,
  },
};
