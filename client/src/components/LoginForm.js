import { useState } from "react";
import { useNavigate } from "react-router-dom";
import API from '../services/api';

function LoginForm(){
   const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleLogin = async (e) => {
        e.preventDefault();
        setError('');
     try{
        const res = await API.post('/api/login', {email, password, name });
        //Guardamos token en LocalStorage
        localStorage.setItem('token', res.data.token);
        localStorage.setItem('user', JSON.stringify(res.data.user));
        navigate('/dashboard');//Redirige al dashboard 
     }catch(err){
        setError('Credenciales invalidas');
     } 
  };

    return(
      <div style={styles.container}>
        <form onSubmit={handleLogin} style={styles.form}>
          <h2 style={styles.title}>Iniciar Sesión</h2>

           <input
            type="text" 
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Nombre"
            required
            style={styles.input}
         />

           <input type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Correo electronico"
            required 
            style={styles.input}
         />

           <input type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Contraseña"
            required
            style={styles.input}
          />
           <button type="submit" style={styles.button}>Entrar</button>

           {error && <p style={styles.error}>{error}</p>}
        </form>
        </div>
     );
}

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
   error:{
      marginTop: '10px',
      color: 'red',
      textAling: 'center',
   },
};

export default LoginForm;