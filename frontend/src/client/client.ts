import axios from 'axios'
import { getAuth } from 'firebase/auth'
import { app } from "../firebase/firebase";


const API = axios.create({
    baseURL: import.meta.env.VITE_BACKEND_URL || "http://localhost:3000/api",
})

API.interceptors.request.use(async (config) => {
  const auth = getAuth(app);
  const currentUser = auth.currentUser;

  if (currentUser) {
    const token = await currentUser.getIdToken();
    config.headers.Authorization = `Bearer ${token}`;
  }

  return config;
});

export default API;