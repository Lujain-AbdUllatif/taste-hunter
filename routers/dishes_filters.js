const express = require("express");
const middleWare = require("../middleware/auth");
const dishesFiltersHandle = require("../handlers/dishes_filters");
const router = express.Router({ mergeParams: true });

router.get(
  "/cooker/cooker_id=:cooker_id+(/api_key=:api_key)?",
  middleWare.verify,
  dishesFiltersHandle.dishesFilterCooker
);

module.exports = router;
