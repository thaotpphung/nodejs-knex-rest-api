const ApiError = require('../error');

function validate(schema) {
  return (req, res, next) => {
    const { error, value } = schema.validate(req.body);
    if (error) {
      next(ApiError.badRequest(error));
      return;
    }

    req.body = value;
    next();
  };
}

module.exports = validate;
