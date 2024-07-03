import axios from "axios";
import dotenv from 'dotenv';
const apiClient = axios.create({
  baseURL: `https://shopreactbackend.onrender.com/api`,
  headers: {
    "Content-type": "application/json",
  },
});

export default apiClient;
