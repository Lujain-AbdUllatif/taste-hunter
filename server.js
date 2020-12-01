const express = require("express");
const { handleErrors } = require("./middleware/err");
const cookers = require("./handlers/cookers");
const dishes = require("./handlers/dishes");
const middleWare = require("./middleware/auth");

// Server set-up
const app = express();
const server = app.listen(3000, () => {
  console.log("Listening at http://localhost:3000");
});

// Uses go here
app.use(express.json());

// Routes set-up
app.get("/cookers", cookers.getAll);

app.post("/cookers", cookers.post);

app.post("/cookers/login", cookers.login);

app.get("/dishes", dishes.getAll);

app.post("/dishes", middleWare.verifyUser, dishes.post);

app.put("/cookers", middleWare.verifyUser, cookers.update);

// Handeling Errors
app.use(handleErrors);
