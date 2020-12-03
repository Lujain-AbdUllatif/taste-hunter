const express = require("express");
const middleWare = require("../middleware/auth");
const dishesHandle = require("../handlers/dishes");
const dishesFiltersRouter = require("./dishes_filters");
const router = express.Router({ mergeParams: true });

router.use("/filters", dishesFiltersRouter);

router
  .route("(/api_key=:api_key)?")
  .get(middleWare.verify, dishesHandle.getAll)
  .post(middleWare.verifyCooker, dishesHandle.post);

router.delete("/:id", middleWare.verifyCooker, dishesHandle.delDish); // must have verification cooker befor deleting

module.exports = router;
