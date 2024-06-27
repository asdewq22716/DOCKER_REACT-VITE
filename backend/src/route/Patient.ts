// Patient.ts
import express from "express";
import {
  getPatiend,
  insertPatiend,
  deletePatiend,
  updatePatiend,
  singleGetPatiend
} from "../controller/patiendController";

const router = express.Router();

router.get("/getPatiend", getPatiend); //เเสดงข้อมูลทั้งหมด
router.get("/getPatiend/:id", singleGetPatiend); //แสดงข้อมูลรายการเดียว
router.post("/createPatiend", insertPatiend); //เพิ่มข้อมูล
router.delete("/patiend/:id", deletePatiend);
router.put("/patiend/:id", updatePatiend);

export default router;
