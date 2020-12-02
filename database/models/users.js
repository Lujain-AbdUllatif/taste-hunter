const db = require("../connection");

const getUserByEmail = (email) => {
  return db
    .query("select * from users where email = $1", [email])
    .then((res) => res.rows);
};

const registerUser = ({ email, password }) => {
  return getUserByEmail(email).then((res) => {
    if (res.length === 0) {
      return db
        .query(
          "insert into users (email, password) values ($1,$2) returning (id),(email)",
          [email, password]
        )
        .then((res) => res.rows[0]);
    } else {
      return "User already exists";
    }
  });
};

module.exports = {
  registerUser,
  getUserByEmail,
};
