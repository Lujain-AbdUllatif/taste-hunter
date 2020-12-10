const model = require("../database/models/users");
const jwt = require("jsonwebtoken");
const db = require("../database/connection");
const bcrypt = require("bcryptjs");
require("dotenv").config();
const SECRET = process.env.JWT_USER_SECRET;

const registerUser = (req, res, next) => {
  const { password, ...resUser } = req.body;
  bcrypt
    .genSalt(12)
    .then((salt) => bcrypt.hash(password, salt))
    .then((password) => {
      model
        .registerUser({ password, ...resUser })
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
      bcrypt.compare(password, user.password).then((match) => {
        if (match) {
          const api_key = jwt.sign({ id: user.id, email }, SECRET);
          res.status(200).send({ email, api_key });
        } else {
          const err = new Error("Password not correct!");
          err.status = 404;
          throw err;
        }
      });
    })
    .catch(next);
};
module.exports = {
  registerUser,
  login,
};
