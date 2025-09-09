import { useState } from "react";
import { register } from "../../services/authService";

function RegisterForm() {
  const [form, setForm] = useState({nombre: "", email: "", password: ""});
  const [mensaje, setMensaje] = useState("");
  const [error, setError] = useState("");

  const handleChange = (e) => {
       setForm({...form, [e.target.name]: e.target.value });
    };

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      const res = await register(form);
      setMensaje("¡Usuario registrado exitosamente!");
      localStorage.setItem("token", res.data.token);
    } catch (err) {
      setError(err.response?.data?.error || "Error al registrar"); 
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <form
        onSubmit={handleRegister}
        className="w-72 md:w-96 bg-white p-6 rounded-2xl shadow-lg"      >
        <h2 className="text-2xl font-bold mb-6 text-center">Registro de Usuario</h2>

        <input
          type="text"
          placeholder="Nombre"
          value={nombre}
          onChange={(e) => setNombre(e.target.value)}
          required
          className="w-full p-3 mb-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          
        />

        <input
          type="email"
          placeholder="Correo"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          className="w-full p-3 mb-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        />

        <input
          type="password"
          placeholder="Contraseña"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          className="w-full p-3 mb-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        />

        <button
          type="submit"
           className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded-lg transition duration-200"
        >
          Registrarse
        </button>

        {mensaje && <p className="text-green-600 mt-4 text-center">{mensaje}</p>}
        {error && <p className="text-red-600 mt-4 text-center">{error}</p>}
      </form>
    </div>
  );
}

export default RegisterForm;
