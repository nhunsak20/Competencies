module.exports = {
  checkUser: (req, res, next) => {
      const { session } = req
    !session.user ? res.status(400).send("Please login...") : next();
  }
};
