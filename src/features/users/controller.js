const ApiError = require('../../error');

class UserController {
  constructor({ userService, logger }) {
    this.userService = userService;
    this.logger = logger;

    this.createUser = this.createUser.bind(this);
    this.getUser = this.getUser.bind(this);
  }

  async createUser(req, res) {
    try {
      const result = await this.userService.createUser(req.body);
      res.status(201).json(result);
    } catch (err) {
      this.logger.err(err);
      res.status(500).json('error');
    }
  }

  async getUser(req, res, next) {
    try {
      const userId = req.params.id;
      const user = await this.userService.getUser(req.params.id);
      if (user == null) {
        next(ApiError.notFound(`user with id ${userId} not found`));
        return;
      }
      res.json(user);
    } catch (err) {
      next(err);
    }
  }
}

module.exports = UserController;
