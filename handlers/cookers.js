const model = require("../database/models/cookers");
const getAll = (req, res, next) => {
  model
    .getAllCookers()
    .then((cookers) => {
      res.send(cookers);
    })
    .catch(next);
};

const post = (req, res, next) => {};

module.exports = {
  getAll,
  post,
};
