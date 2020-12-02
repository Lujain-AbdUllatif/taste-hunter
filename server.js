const express = require("express");
const { handleErrors } = require("./middleware/err");
const cookers = require("./handlers/cookers");
const dishes = require("./handlers/dishes");
const users = require("./handlers/users");
const middleWare = require("./middleware/auth");

// Server set-up
const app = express();
const server = app.listen(3000, () => {
  console.log("Listening at http://localhost:3000");
});

// Uses go here
app.use(express.json());

app.use(express.urlencoded({ extended: false }));

// Routes set-up

app
  .route("/cookers(/api_key=:api_key)?")
  .get(middleWare.verify, cookers.getAll)
  .post(cookers.post)
  .put(middleWare.verifyCooker, cookers.update);

app.post("/cookers/login", cookers.login);

app
  .route("/dishes")
  .get(dishes.getAll)
  .post(middleWare.verifyCooker, dishes.post);

app.delete("/dishes/:id", dishes.delDish);

app.post("/register", users.registerUser);

app.get("/cookers/dishes/:cookerid", dishes.dishesFilter);

// Handeling Errors
app.use(handleErrors);
