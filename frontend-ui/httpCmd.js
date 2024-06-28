import axios from "axios";

// Create an axios instance with predefined settings
const apiClient = axios.create({
  baseURL: process.env.REACT_APP_API_BASE_URL || "http://localhost:8080/api",
  headers: {
    "Content-type": "application/json",
  },
});

// Export the axios instance
export default apiClient;
