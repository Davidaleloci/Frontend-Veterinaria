import axios from "axios";

const IST = axios.create({
  baseURL: "https://backend-veterinaria-0h3s.onrender.com/api",
});

IST.interceptors.request.use((config) => {
  const token = sessionStorage.getItem("token");
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
}, (error) => Promise.reject(error));

IST.interceptors.response.use(
  (response) => response,
  (error) => {
    /*if (error.response && error.response.status === 401) {
      alert("Tu sesión ha expirado. Inicia sesión nuevamente.");
      localStorage.clear();
      window.location.href = "/administracion/login";
    }*/
    return Promise.reject(error);
  }
);

export default IST