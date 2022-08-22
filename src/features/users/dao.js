class UserDao {
  constructor({ db, logger }) {
    this.db = db;
    this.logger = logger;
  }

  async createUser(email, firstName, middleNames, lastName) {
    const [id] = await this.db('user')
      .insert({
        email,
        first_name: firstName,
        middle_names: middleNames,
        last_name: lastName,
      })
      .returning('id');
    return id;
  }

  async getUser(id) {
    try {
      const users = await this.db.select('*').from('user').where('id', id);
      return users && users.length >= 1 ? users[0] : null;
    } catch (err) {
      this.logger.error(err);
      throw err;
    }
  }
}

module.exports = UserDao;
