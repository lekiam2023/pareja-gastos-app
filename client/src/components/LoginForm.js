import { useState } from "react";
import API from '../services/api';

function LoginForm(){
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [mensaje, setMensaje] = useState('');
    const [error, setError] = useState('');

    const handleLogin = async (e) => {
        e.preventDefault();
        setMensaje('');
        setError('');
     try{
        const res = await API.post('/api/login', {email, password, });

        //Guardamos token en LocalStorage
        localStorage.setItem('token', res.data.token);

        setMensaje('¡Inicio de sesión exitoso!');
        console.log('Datos del usuario:', res.data.user);

     }catch(err){
        setError('Credenciales invalidas');
     } 
  };
    return (
        <div style={{maxWidth: 300, margin: 'auto'}}>
            <h2>Iniciar Sesión</h2>
            <form onSubmit={handleLogin}>
             <input 
                type="email"
                placeholder="Correo"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                style={{ width: '100%', marginBottom: '10px' }}
             />

            <input 
                 type="password"
                 placeholder="Contraseña"
                 value={password}
                 onChange={(e) => setPassword(e.target.value)}
                 required
                 style={{ width: '100%', marginBottom: '10px' }}
             />
             <button type="submit" style={{ width: '100%' }}>
                 Iniciar Sesión
             </button>
          </form>
             {mensaje && <p style={{color: 'green'}}>{mensaje}</p>}
             {error && <p style={{color: 'red'}}>{error}</p>}
        </div>

     );
}

export default LoginForm;