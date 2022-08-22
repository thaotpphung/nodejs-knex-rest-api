const awilix = require('awilix');
const db = require('./database');
const logger = require('./src/common/logger');

const UserController = require('./src/features/users/controller');
const UserService = require('./src/features/users/service');
const UserDao = require('./src/features/users/dao');

const container = awilix.createContainer({
  injectionMode: awilix.InjectionMode.PROXY,
});

function setup() {
  container.register({
    // common
    db: awilix.asValue(db),
    logger: awilix.asValue(logger),

    // users
    userController: awilix.asClass(UserController),
    userService: awilix.asClass(UserService),
    userDao: awilix.asClass(UserDao),

    // recipes
  });
}

module.exports = {
  container,
  setup,
};
