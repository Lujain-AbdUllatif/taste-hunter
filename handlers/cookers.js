require("dotenv").config();
const model = require("../database/models/cookers");
const jwt = require("jsonwebtoken");
const { getCookerByEmail } = require("../database/models/cookers");
const SECRET = process.env.JWT_SECRET;

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

const login = (req, res, next) => {
  const { email, password } = req.body;
  model
    .getCookerByEmail(email)
    .then((cooker) => {
      //MUST update the post route so the email is unique for every cooker
      if (cooker === "not found") {
        res.status(404).send({ message: "User Not Found" });
      } else {
        console.log(cooker);
        if (password === cooker.password) {
          const access_token = jwt.sign({ id: cooker.id }, SECRET, {
            expiresIn: "2h",
          });
          res.status(200).send({ email, access_token });
        } else {
          res.status(403).send({ message: "Wrong Password" });
        }
      }
    })
    .catch(next);
};

module.exports = {
  getAll,
  post,
  login,
};
