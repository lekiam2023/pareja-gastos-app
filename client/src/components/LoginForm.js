import { useState } from "react";
import { useNavigate } from "react-router-dom";
import API from '../services/api';

function LoginForm(){
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleLogin = async (e) => {
        e.preventDefault();
        setError('');
     try{
        const res = await API.post('/api/login', {email, password, });
        //Guardamos token en LocalStorage
        localStorage.setItem('token', res.data.token);
        navigate('/dashboard');//Redirige al dashboard 
     }catch(err){
        setError('Credenciales invalidas');
     } 
  };

    return (
        <form onSubmit={handleLogin}>
           <input type="email" value={email} onChange={(e) =>setEmail(e.target.value)} placeholder="Correo" required />
           <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Contraseña" required />
           <button type="submit">Iniciar Sesíon</button>
           {error && <p style={{ color:'red' }}>{error}</p>}
        </form>
     );
}

export default LoginForm;