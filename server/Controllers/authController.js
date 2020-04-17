const bcrypt = require("bcryptjs");

module.exports = {
  login: async (req, res) => {
    const { user, pass } = req.body;
    const { session } = req;
    const db = req.app.get("db").auth;

    try {
      let checkUser = await db.user_check(user);
      checkUser = checkUser[0];

      if (!checkUser) {
        return res.status(400).send("Username not found...");
      }

      const isAuth = bcrypt.compareSync(pass, checkUser.password);

      if (isAuth) {
        session.user = {
          userID: checkUser.user_id,
          username: checkUser.username,
        };
        return res.status(200).send(session.user);
      }
      return res.status(400).send("Incorrect password...");
    } catch {
      return res.sendStatus(500);
    }
  },
  register: async (req, res) => {
    const { user, pass } = req.body;
    const { session } = req;
    const db = req.app.get("db").auth;
    try {
      let userCheck = await db.user_check(user);
      userCheck = userCheck[0]
      
      if (userCheck) {
        return res.status(400).send("User already exist...");
      }

      const salt = bcrypt.genSaltSync(10);
      const hash = bcrypt.hashSync(pass, salt);

      let newUser = await db.register({ user, hash });
      newUser = newUser[0];

      session.user = {
        userID: newUser.user_id,
        username: newUser.username,
      };

      return res.status(200).send(session.user);
    } catch {
      return res.sendStatus(500);
    }
  },
  logout: (req, res) => {
    if (req.session.user) {
      req.session.destroy();
      res.sendStatus(200);
    }
  },
  check: (req, res) => {
    req.session.user ? res.status(200).send(req.session.user) : res.status(400).send('Please login...');
  }
};
