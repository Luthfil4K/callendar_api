import axios from "axios";

const api = axios.create({
  baseURL: `${process.env.LOCAL_URL}/api`,
});

export default api;