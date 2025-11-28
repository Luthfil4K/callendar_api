import axios from "axios";

const api = axios.create({
  baseURL: "/api",    // langsung ke route handler Next.js
});

export default api;
