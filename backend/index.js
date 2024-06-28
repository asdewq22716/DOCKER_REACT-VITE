const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const patientRouter = require("./src/route/Patient"); // Assuming this is your patient route
const db = require("./src/config/db"); // Import db connection
dotenv.config();

const app = express();

// Middleware
app.use(cors()); // Enable CORS
app.use(express.json()); // Parse JSON request bodies
// Check MySQL connection
app.get("/", (req, res) => {
    db.connect((err) => {
        if (err) {
            console.error("Error connecting to MySQL:", err);
            res.status(500).json({ status: "error", message: "Database connection error" });
            return;
        }
        console.log("Connected to MySQL as id", db.threadId);
        res.json({ status: "success", message: "Connected to MySQL database" });
    });
});

// Routes
app.use("/api", patientRouter); // Mount the patient router

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
