import axios from "axios";

const API = axios.create({
  baseURL: "https://hozify-backend.onrender.com/api",
});

export const getHomeServices = () => API.get("/home-services");