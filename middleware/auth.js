require("dotenv").config();
const SECRET = process.env.JWT_SECRET;
const USER_SECRET = process.env.JWT_USER_SECRET;
const jwt = require("jsonwebtoken");
const model = require("../database/models/users");

const verifyCooker = (req, res, next) => {
  const { authorization } = req.headers;
  if (authorization) {
    try {
      const cooker_id = jwt.verify(authorization, SECRET).id;
      req.body.cooker_id = cooker_id;
      next();
    } catch (error) {
      const err = new Error("Invalid token");
      err.status = 401;
      next(err);
    }
  } else {
    const error = new Error("Authorization header required");
    error.status = 400;
    next(error);
  }
};

const verifyUser = (req, res, next) => {
  try {
    const { api_key } = req.params;
    const { id, email } = jwt.verify(api_key, USER_SECRET);
    model
      .getUserByEmail(email)
      .then((res) => {
        if (res.length !== 0) {
          return next();
        } else {
          const err = new Error("Invalid API_Key");
          err.status = 400;
          throw err;
        }
      })
      .catch(next);
  } catch (error) {
    const err = new Error("Didn't pass the API Key");
    err.status = 400;
    next(err);
  }
};

function verify(req, res, next) {
  const { api_key } = req.params;
  if (api_key) return verifyUser(req, res, next);
  else return verifyCooker(req, res, next);
}

module.exports = {
  verifyCooker,
  verifyUser,
  verify,
};
