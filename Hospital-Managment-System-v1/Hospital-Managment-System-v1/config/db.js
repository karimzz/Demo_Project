const mysql = require("mysql2");

const db = mysql.createPool({
  host: "localhost",
  user: "root",
  password: "",
  database: "hospitaldummy",
  connectionLimit: 50,
});

module.exports = db;
