const dotenv = require("dotenv");
const db = require("../config/db");

dotenv.config();

exports.getPatiend = (req, res) => {
  db.query("SELECT * FROM `user_patiend`", (err, results) => {
    if (err) {
      console.error("Error querying database:", err);
      res.status(500).json({ error: "Database error" });
      return;
    }
    res.json(results);
  });
};

exports.singleGetPatiend = (req, res) => {
  const { id } = req.params;

  const sql = "SELECT * FROM `user_patiend` WHERE id = ?";
  const values = [id];

  db.query(sql, values, (err, results) => {
    if (err) {
      res.status(500).json({ error: "Database error" });
      return;
    }
    if (results.length === 0) {
      res.status(404).json({ error: "ไม่พบรายการผู้ป่วย" });
      return;
    }
    const patient = results[0];
    res.json(patient);
  });
};

exports.insertPatiend = (req, res) => {
  const { name, lastname, idCard, age } = req.body;

  const sql =
    "INSERT INTO `user_patiend` (firstname, lastname, idcard, age) VALUES (?, ?, ?, ?)";
  const values = [name, lastname, idCard, age];

  db.query(sql, values, (err, result) => {
    if (err) {
      res.status(500).json({ error: "Database error" });
      return;
    }
    console.log(result); // Check insert result
    res.status(201).json({ message: "success" });
  });
};

exports.deletePatiend = (req, res) => {
  const { id } = req.params;

  const sql = "DELETE FROM `user_patiend` WHERE id = ?";
  const values = [id];

  db.query(sql, values, (err, result) => {
    if (err) {
      res.status(500).json({ error: "Database error" });
      return;
    }
    if (result.affectedRows === 0) {
      res.status(404).json({ error: "ไม่พบรายการ" });
      return;
    }
    res.json({ message: "ลบรายการสำเร็จ" });
  });
};

exports.updatePatiend = (req, res) => {
  const { id } = req.params;
  const { name, lastname, idCard, age } = req.body;

  const sql =
    "UPDATE `user_patiend` SET firstname = ?, lastname = ?, idcard = ?, age = ? WHERE id = ?";
  const values = [name, lastname, idCard, age, id];

  db.query(sql, values, (err, result) => {
    if (err) {
      console.error("Error updating data:", err);
      res.status(500).json({ error: "Database error" });
      return;
    }
    if (result.affectedRows === 0) {
      res.status(404).json({ error: "ไม่พบรายการ" });
      return;
    }
    res.json({ message: "success" });
  });
};
