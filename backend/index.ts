import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import PatiendRouter from "./src/route/Patient";
dotenv.config();
const app = express();
app.use(cors()); // ใช้ CORS middleware
const PORT = process.env.NODE_DOCKER_PORT || 8080;

app.use(express.json());
console.log("test");

app.use("/api", PatiendRouter);

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
