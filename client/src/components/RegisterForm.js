import { useState } from "react";
import API from '../services/api';


function RegisterForm(){
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [mensaje, setMensaje] = useState('');
    const [error, setError] = useState('');
    
    const handleRegister = async (e) =>{
        e.preventDefault();
        setMensaje('');
        setError('');

        try{
            const res = await API.post('/api/register', {email, password});
            setMensaje('¡Usuario registrado exitosamente!');
            console.log('Respuesta:',res.data);

            //Guardamos el Token 
            localStorage.setItem('token', res.data.token);
        }catch(err){
            setError('Error al registrar. Intenta con otro correo.');
        }
    };

    return (
        <div style={{maxWidth: 300, margin:'auto'}}>
         <h2>Registro de Usuario</h2>
         <form onSubmit={handleRegister}>
            <input 
            type="email"
            placeholder="Correo"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            style={{width: '100%', marginBottom: '10px'}}
            />
            <input 
               type="password"
               placeholder="Contraseña"
               value={password}
               onChange={(e) => setPassword(e.target.value)}
               required
               style={{width: '100%', marginBottom: '10px'}}
            /> 
            <button type="submit" style={{width:'100%'}}>
                Registrarse
            </button>
         </form>
         {mensaje && <p style={{color:'green'}}>{mensaje}</p>}
         {error && <p style={{color:'red'}}>{error}</p>}
        </div>
    );
}

export default RegisterForm;