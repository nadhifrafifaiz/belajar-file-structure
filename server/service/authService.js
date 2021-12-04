const Service = require("./service");
const { Users, default: db } = require("../models");
const bcrypt = require("bcrypt");

class AuthService extends Service {
  constructor() {
    this.bcrypt = bcrypt;
    // ...
  }

  registerUser(req) {
    const { username, email, password } = req.body;

    // to find if username and email has been used
    const findUserByUsernameAndEmail = await Users.findOne({
      username: username,
      email: email,
    });

    // const findUserByUsernameAndEmail = await db.query(
    //   `select * from users where username = '${username}' or email = '${email}'`
    // )

    // if username and email has been used
    if (findUserByUsernameAndEmail) {
      this.error({
        message: "Username or email has been used",
      });
    }

    const createNewUser = await Users.create({ username, email, password });

    // create token

    return this.success({
      user: createNewUser,
      token: "token",
    });
  }
}

module.exports = AuthService;
