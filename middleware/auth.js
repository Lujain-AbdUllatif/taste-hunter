require("dotenv").config();
const SECRET = process.env.JWT_SECRET;
const jwt = require("jsonwebtoken");

const verifyUser = (req, res, next) => {
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

module.exports = {
  verifyUser,
};
