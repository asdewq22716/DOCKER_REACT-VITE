import { Request, Response } from "express";
import dotenv from "dotenv";
import db from "../config/db";
import { OkPacket, RowDataPacket } from "mysql2";
dotenv.config();

export const getPatiend = (req: Request, res: Response) => {
  db.query("SELECT * FROM `user_patiend`", (err, results) => {
    if (err) {
      console.error("Error querying database:", err);
      res.status(500).json({ error: "Database error" });
      return;
    }
    res.json(results);
  });
};
export const singleGetPatiend = (req: Request, res: Response) => {
  const { id } = req.params; // ดึงค่า id ของผู้ป่วยที่ต้องการดึงข้อมูล

  // คำสั่ง SQL สำหรับดึงข้อมูลผู้ป่วยจากฐานข้อมูลเพียงรายการเดียว
  const sql = "SELECT * FROM `user_patiend` WHERE id = ?";
  const values = [id]; // ค่าที่จะส่งไปให้กับพารามิเตอร์ในคำสั่ง SQL
  db.query(sql, values, (err, results) => {
    if (err) {
      res.status(500).json({ error: "Database error" });
      return;
    }
    if ((results as RowDataPacket[]).length === 0) {
      res.status(404).json({ error: "ไม่พบรายการผู้ป่วย" });
      return;
    }
    const patient = (results as RowDataPacket[])[0]; // ดึงข้อมูลผู้ป่วยจาก results ที่ได้รับมา
    res.json(patient);
  });
};

export const insertPatiend = (req: Request, res: Response) => {
  const { name, lastname, idCard, age } = req.body; // Assuming data is sent in the request body
  const sql =
    "INSERT INTO `user_patiend` (firstname, lastname, idcard, age) VALUES (?, ?, ?, ?)";
  const values = [name, lastname, idCard, age];

  db.query(sql, values, (err, result) => {
    if (err) {
      res.status(500).json({ error: "Database error" });
      return;
    }
    console.log(result); //เช็คinsert
    res.status(201).json({ message: "success" });
  });
};

export const deletePatiend = (req: Request, res: Response) => {
  const { id } = req.params;
  const sql = "DELETE FROM `user_patiend` WHERE id = ?";
  const values = [id];
  db.query(sql, values, (err, result) => {
    if (err) {
      res.status(500).json({ error: "Database error" });
      return;
    }
    const insertResult = result as OkPacket;
    if (insertResult.affectedRows === 0) {
      res.status(404).json({ error: "ไม่พบรายการ" });
      return;
    }
    res.json({ message: "ลบรายการสำเร็จ" });
  });
};

export const updatePatiend = (req: Request, res: Response) => {
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
    const insertResult = result as OkPacket;
    if (insertResult.affectedRows === 0) {
      res.status(404).json({ error: "ไม่พบรายการ" });
      return;
    }
    res.json({ message: "success" });
  });
};
