import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { login } from '../../services/authService';

function LoginForm(){
   /*Declaraciones de las variables*/
    const [form, setForm] = useState({ name: "", email: "", password: "" });
    const [error, setError] = useState('');
    const navigate = useNavigate();

    /*Funcion encargada de obtener los datos del usuario*/
    const handleChange = (e) =>{
      setForm({ ...form, [e.target.name]: e.target.value});
    };

    
    const handleLogin = async (e) => {
        e.preventDefault();
     try{
        const res = await login(form);/*POST ----> Al backend con los datos*/
        //Guardamos token en LocalStorage
        localStorage.setItem('token', res.data.token);/**/
        localStorage.setItem('user', JSON.stringify(res.data.user));
        navigate('/dashboard');//Redirige al dashboard 
     }catch {
        setError('Credenciales invalidas');
     } 

  };

    return(
      <div className="flex items-center justify-center min-h-screen bg-gray-100">
        <form className="w-72 md:w-96 bg-white p-6 rounded-2xl shadow-lg" onSubmit={handleLogin}>
          <h2 className="text-2xl font-bold text-center mb-6 text-gray-800">Iniciar Sesión</h2>

           <input
            type="text" 
            name="name"
            value={form.name}
            onChange={handleChange}
            placeholder="Nombre"
            required
            className="w-full p-3 mb-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
         />

           <input 
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            placeholder="Correo electronico"
            required
            className="w-full p-3 mb-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
 
         />

           <input 
             type="password"
             name="password"
             value={form.password}
             onChange={handleChange}
             placeholder="Contraseña"
             required
             autoComplete="curret-password"
             className="w-full p-3 mb-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"

          />
           <button type="submit"
           className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded-lg transition duration-200"
           >Entrar</button>

           {error && <p className="mt-4 text-red-500 text-sm text-center">{error}</p>}
        </form>
        </div>
     );
}
export default LoginForm;