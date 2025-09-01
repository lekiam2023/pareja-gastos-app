/*Este componente protegerá rutas que necesitan login (como /dashboard).*/
import React from 'react';
import {Navigate} from 'react-router-dom';

const PrivateRoute = ({ children }) =>{
    const isDev = process.env.NODE_ENV === "development";
    const token = localStorage.getItem('token');

   //En modo desarrollo, siempre permite acceder
   if(!isDev && !token){
   return <Navigate to="/login"/>
   }
   
   return children;
 
};

export default PrivateRoute;