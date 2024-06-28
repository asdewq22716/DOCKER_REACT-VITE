import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import PatiendRouter from "./src/route/Patient";
dotenv.config();
const app = express();
app.use(cors()); // ใช้ CORS middleware


app.use(express.json());
console.log("test");

app.use("/api", PatiendRouter);

app.listen(3000, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
