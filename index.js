const app = require('./src/app');
const config = require('./src/config');
const logger = require('./src/common/logger');

const main = async () => {
  app.listen(config.port, () => {
    logger.info(`Server running on port ${config.port}`);
  });
};

main().catch((err) => {
  logger.error(`Error on starting server: ${err}`);
});
