const db = require("../connection");

const getAllCookers = () => {
  return db
    .query("select id,name,email,work_address from cookers")
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

const getCookerByEmail = (email) => {
  return db
    .query("SELECT * FROM cookers WHERE email=($1)", [email])
    .then((res) => {
      return res.rowsCount !== 0 ? res.rows[0] : "not found";
    });
};

const updateCookerInfo = ({ id, name, password, work_address }) => {
  return db
    .query(
      `UPDATE cookers set name=$1 ,password=$2, work_address=$3 where id = ${id} returning (name), (email), (work_address)`,
      [name, password, work_address]
    )
    .then((response) => response.rows[0]);
};

module.exports = {
  getAllCookers,
  addCooker,
  getCookerByEmail,
  updateCookerInfo,
};
