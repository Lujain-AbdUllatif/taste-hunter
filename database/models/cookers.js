const db = require("../connection");

const getAllCookers = () => {
  return db
    .query("select name,email,work_address from cookers")
    .then((response) => {
      return response.rows;
    });
};

module.exports = { getAllCookers };
