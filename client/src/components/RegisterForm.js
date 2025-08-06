import { useState } from "react";
import API from '../services/api';


function RegisterForm(){
     const [nombre, setNombre] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [mensaje, setMensaje] = useState('');
    const [error, setError] = useState('');
    
    const handleRegister = async (e) =>{
        e.preventDefault();
        setMensaje('');
        setError('');

        try{
            const res = await API.post('/api/register', {nombre, email, password});
            setMensaje('¡Usuario registrado exitosamente!');
            console.log('Respuesta:',res.data);

            //Guardamos el Token 
            localStorage.setItem('token', res.data.token);
        }catch(err){
            setError('Error al registrar. Intenta con otro correo.');
        }
    };

    return (
        <div style={styles.container}>
         <form onSubmit={handleRegister} style={styles.form}>
             <h2 style={styles.title}>Registro de Usuario</h2>
             <input 
            type="text"
            placeholder="Nombre"
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
            required
            style={styles.input}
            />
            <input 
            type="email"
            placeholder="Correo"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            style={styles.input}
            />
            <input 
               type="password"
               placeholder="Contraseña"
               value={password}
               onChange={(e) => setPassword(e.target.value)}
               required
               style={styles.input}
            /> 
            <button type="submit" style={styles.button}>
                Registrarse
            </button>
         </form>
         {mensaje && <p style={styles.mensaje}>{mensaje}</p>}
         {error && <p style={styles.error}>{error}</p>}
        </div>
    );
};
    const styles ={
   container:{
      minHeight: '100vh',
      display: 'flex',
      justifyContent: 'center',
      background: '#f3f4f6',
   },
   form:{
      background: '#fff',
      padding: '30px',
      borderRadius: '8px',
      boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
      width: '100%',
      maxWidth: '400px',
      display: 'flex',
      flexDirection: 'column',
   },
   title:{
      marginBottom: '2px',
      textAling: 'center',
      color: '#333',
   },
   input:{
      padding: '12px',
      marginBottom: '15px',
      borderRadius: '5px',
      border: '1px solid #ccc',
      fontSize: '16px',
   },
   button:{
      padding: '12px',
      backgroundColor: '#4f46e5',
      color: '#fff',
      border: 'none',
      borderRadius: '5px',
      fontSize: '16px',
      cursor: 'pointer',
   },
   mensaje:{
      color:'green'
   },
   error:{
      marginTop: '10px',
      color: 'red',
      textAling: 'center',
   },
 };

export default RegisterForm;