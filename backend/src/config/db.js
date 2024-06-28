const mysql = require("mysql2");
const dotenv = require("dotenv");

dotenv.config();

const db = mysql.createConnection({
  host: process.env.DB_HOST || "db",
  port: parseInt(process.env.DB_PORT || "3307", 10),
  user: process.env.DB_USER || "root",
  password: process.env.DB_PASSWORD || "1234",
  database: process.env.DB_NAME || "pnop_db",
});

db.connect((err) => {
  if (err) {
    console.error("Error connecting to MySQL:", err);
    return;
  }
  console.log("Connected to MySQL as id", db.threadId);
});

module.exports = db;
