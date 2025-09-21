import axios from 'axios';//Importamos 'AXIOS' para poder hacer peticiones al servidor


const API = axios.create({
    baseURL: process.env.REACT_APP_API_URL || 'http://localhost:4000',
});

   //Interceptor para añadir el token en cada "resquest"
   API.interceptors.request.use(
       (config) => {
         const token = localStorage.getItem('token');
       if(token){
          config.headers.Authorization = `Bearer ${token}`;
       }
       return config; 
    },
     (error) => Promise.reject(error)
  );


export default API;

