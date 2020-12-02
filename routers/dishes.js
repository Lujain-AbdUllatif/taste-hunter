const express = require("express");
const dogsRouter = express.Router();
const dishes = require("../handlers/dishes");

router.get("/", dishes.getAll);

module.exports = dogsRouters;

// app.get("/dishes", dishes.getAll);

// app.delete("/dishes/:id", dishes.delDish);

// app.post("/dishes", middleWare.verifyUser, dishes.post);
