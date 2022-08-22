const ApiError = require('.');
const logger = require('../common/logger');

function apiErrorHandler(err, req, res, next) {
  logger.error(`Error ${err}`);
  if (err instanceof ApiError) {
    return res.status(err.code).json(err.message);
  }
  return res.status(500).json(ApiError.internal('something went wrong'));
}

module.exports = apiErrorHandler;
