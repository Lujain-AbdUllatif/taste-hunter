const model = require("../database/models/dishes");

const getAll = (req, res, next) => {
  model
    .getAllDishes()
    .then((dishes) => {
      res.send(dishes);
    })
    .catch(next);
};

const post = (req, res, next) => {
  const dish = req.body;
  model
    .addNewDish(dish)
    .then((dish) => {
      console.log(dish);
      res.status(201).send(dish);
    })
    .catch(next);
};

module.exports = {
  getAll,
  post,
};
