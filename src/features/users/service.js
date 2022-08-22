/* eslint-disable class-methods-use-this */
class UserService {
  constructor({ userDao }) {
    this.userDao = userDao;
  }

  getUser(id) {
    return this.userDao.getUser(id);
  }

  createUser({ email, firstName, middleNames, lastName }) {
    const { fName, mNames, lName } = this.sanitizeNames(
      firstName,
      middleNames,
      lastName
    );

    return this.userDao.createUser(email, fName, mNames, lName);
  }

  sanitizeNames(firstName, middleNameStr, lastName) {
    let [sanitizedFirstName, ...mNames] = firstName.trim().split(' ');
    if (middleNameStr) {
      mNames = mNames.concat(middleNameStr.split(' '));
    }

    const sanitizedMiddleNames = mNames.filter((n) => n);
    const sanitizedMiddleName = sanitizedMiddleNames.length
      ? sanitizedMiddleNames.join(' ')
      : null;
    const sanitizedLastName = lastName.trim();

    return {
      fName: sanitizedFirstName,
      mNames: sanitizedMiddleName,
      lName: sanitizedLastName,
    };
  }
}

module.exports = UserService;
