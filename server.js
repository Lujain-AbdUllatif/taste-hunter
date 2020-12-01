const express = require("express");
const handleErrors = require("./middleware/err");

// Server set-up
const app = express();
const server = app.listen(3000, () => {
  console.log("Listening at http://localhost:3000");
});

// Uses go here
server.use(express.json());

// Routes set-up

// Handeling Errors
server.use(handleErrors);
