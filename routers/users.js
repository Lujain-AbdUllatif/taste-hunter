const express = require("express");
const middleWare = require("../middleware/auth");
const usersHandle = require("../handlers/users");
const router = express.Router();

router.post("/", usersHandle.registerUser);
router.post("/login", usersHandle.login);
module.exports = router;
