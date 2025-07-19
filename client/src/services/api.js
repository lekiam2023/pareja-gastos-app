import axios from 'axios';//Importamos 'AXIOS' para poder hacer peticiones al servidor


const API = axios.create({
    baseURL: process.env.REACT_APP_API_URL,//Utilizamos una configuracion .env donde se encuentra la direccion http
});

export default API;

