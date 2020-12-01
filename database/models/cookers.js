const db = require("../connection");

const getAllCookers = () => {
  return db
    .query("select name,email,work_address from cookers")
    .then((response) => {
      return response.rows;
    });
};

const addCooker = ({ name, email, password, work_address }) => {
  return db
    .query(
      `insert into cookers (name, email, password, work_address) values ($1,$2,$3,$4) returning (id) , (name), (email), (password)`,
      [name, email, password, work_address]
    )
    .then((response) => response.rows[0]);
};
module.exports = { getAllCookers, addCooker };
