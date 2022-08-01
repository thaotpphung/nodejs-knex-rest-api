const Server = require('./src/server');
const config = require('./config');

const server = new Server(config.port);
server.run(config.port);
