const pg = require("pg");
const dotenv = require("dotenv");

dotenv.config();

const connectionString = process.eventNames.DATABASE_URL;

const db = new pg.Pool({ connectionString });

module.exports = db;
