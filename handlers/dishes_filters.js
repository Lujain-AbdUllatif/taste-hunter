const model = require("../database/models/dishes");

function dishesFilterCooker(req, res, next) {
  const cooker_id = parseInt(req.params.cooker_id);
  model
    .dishesFilter(cooker_id)
    .then((dish) => {
      console.log(dish);
      res.status(202).send(dish);
    })
    .catch(next);
}

module.exports = {
  dishesFilterCooker,
};
