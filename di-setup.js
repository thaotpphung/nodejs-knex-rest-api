const awilix = require('awilix');
const DevController = require('./src/controller/dev');
const DevService = require('./src/service/dev');
const DevDao = require('./src/dao/dev');
const db = require('./db');

const container = awilix.createContainer({
  injectionMode: awilix.InjectionMode.PROXY,
});

function setup() {
  container.register({
    devController: awilix.asClass(DevController),

    // services

    devService: awilix.asClass(DevService),

    // DAOs
    devDao: awilix.asClass(DevDao),

    // inject knexjs object with database connection pooling
    // support
    db: awilix.asValue(db),
  });
}

module.exports = {
  container,
  setup,
};
