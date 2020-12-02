const model = require("../database/models/users");
const jwt = require("jsonwebtoken");
require("dotenv").config();
const SECRET = process.env.JWT_USER_SECRET;

const registerUser = (req, res, next) => {
  model
    .registerUser(req.body)
    .then((data) => {
      if (data === "User already exists") {
        const err = new Error("User already exists");
        err.status = 406;
        return next(err);
      }
      const { id, email } = data;
      const API_Key = jwt.sign({ id, email }, SECRET);
      res.status(201).send({ email, API_Key });
    })
    .catch(next);
};

module.exports = {
  registerUser,
};
