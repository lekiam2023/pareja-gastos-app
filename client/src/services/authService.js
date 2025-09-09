import API from "../api/apiClient";

/*Creamos servicios para separar lógica*/

export const login = (credentials) => API.post("/api/login", credentials);
export const register = (date) => API.post("/api/register", date);