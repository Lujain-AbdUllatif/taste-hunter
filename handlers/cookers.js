const model = require("../database/models/cookers");
const getAll = (req, res, next) => {
  model
    .getAllCookers()
    .then((cookers) => {
      res.send(cookers);
    })
    .catch(next);
};

const post = (req, res, next) => {
  const cooker = req.body;
  model
    .addCooker(cooker)
    .then((cooker) => {
      console.log(cooker);
      const { password, ...resDetails } = cooker;
      res.status(201).send(resDetails);
    })
    .catch(next);
};

module.exports = {
  getAll,
  post,
};
