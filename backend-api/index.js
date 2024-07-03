const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const patientRouter = require("./src/route/Patient"); // Assuming this is your patient route

dotenv.config();

const app = express();

// Middleware
app.use(cors()); // Enable CORS
app.use(express.json()); // Parse JSON request bodies

// Routes
app.use("/api", patientRouter); // Mount the patient router

// Start the server
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
