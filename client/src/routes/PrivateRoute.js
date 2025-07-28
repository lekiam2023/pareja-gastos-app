/*Este componente protegerá rutas que necesitan login (como /dashboard).*/
import {Navigate} from 'react-router-dom';

const PrivateRoute = ({ children }) =>{
    const token = localStorage.getItem('token');
     return token ? children : <Navigate to="/login" />;
};

export default PrivateRoute;