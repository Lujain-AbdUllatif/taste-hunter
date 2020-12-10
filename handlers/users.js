const model = require("../database/models/users");
const jwt = require("jsonwebtoken");
const db = require("../database/connection");
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
      const api_key = jwt.sign({ id, email }, SECRET);
      res.status(201).send({ email, api_key });
    })
    .catch(next);
};

const login = (req, res, next) => {
  const { email, password } = req.body;
  model
    .getUserByEmail(email)
    .then((response) => {
      if (response.length === 0) {
        const err = new Error("User not found");
        err.status = 404;
        throw err;
      }
      const user = response[0];
      if (password === user.password) {
        const api_key = jwt.sign({ id: user.id, email }, SECRET);
        res.status(200).send({ email, api_key });
      } else {
        const err = new Error("Password not correct!");
        err.status = 404;
        throw err;
      }
    })
    .catch(next);
};
module.exports = {
  registerUser,
  login,
};
