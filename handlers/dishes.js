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

function delDish(req, res, next) {
  const dishId = parseInt(req.params.id);
  model
    .deleteDish(dishId)
    .then(() => {
      res.status(202).send({ msg: "Dish deleted successfully" });
    })
    .catch(next);
}

function dishesFilter(req, res, next) {
  const cooker_id = parseInt(req.params.cookerid);
  model.dishesFilter(cooker_id)
  .then ((dish) => {
    console.log(dish);
  res.status(202).send(dish);
  })
  .catch(next);
}

module.exports = {
  getAll,
  post,
  delDish,
  dishesFilter
};
