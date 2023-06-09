import axios from "axios";

export default axios.create({
  baseURL: "https://d0e6-154-122-63-226.ngrok-free.app",
  headers: { "ngrok-skip-browser-warning": "true" },
});
