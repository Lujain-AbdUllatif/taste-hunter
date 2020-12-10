const express = require("express");
const middleWare = require("../middleware/auth");
const cookersHandle = require("../handlers/cookers");
const router = express.Router();

router
  .route("(/api_key=:api_key)?")
  .get(middleWare.verify, cookersHandle.getAll)
  .post(cookersHandle.post)
  .put(middleWare.verifyCooker, cookersHandle.update);

router.post("/login", cookersHandle.login);

module.exports = router;
