require("dotenv").config();
const SECRET = process.env.JWT_SECRET;
const jwt = require("jsonwebtoken");
