const mysql = require("mysql2");
const dotenv = require("dotenv");

dotenv.config();

const db = mysql.createConnection({
  host: process.env.DB_HOST,
  port: parseInt(process.env.DB_PORT, 10),
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE,
});

db.promise()
  .connect()
  .then(() => {
    console.log("Connected to MySQL as id", db.threadId);
  })
  .catch((err) => {
    console.error("Error connecting to MySQL:", err);
  });

module.exports = db;
