import { useState } from "react";
import axios from "axios";

// Crea la instancia de API usando la variable de entorno
const API = axios.create({
  baseURL: process.env.REACT_APP_API_URL || "http://localhost:4000",
});

function RegisterForm() {
  const [nombre, setNombre] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [mensaje, setMensaje] = useState("");
  const [error, setError] = useState("");

  // DEBUG: verificar que la URL es la correcta
  console.log("API URL:", process.env.REACT_APP_API_URL);

  const handleRegister = async (e) => {
    e.preventDefault();
    setMensaje("");
    setError("");

    try {
      const res = await API.post("/api/register", { nombre, email, password });
      setMensaje("¡Usuario registrado exitosamente!");
      localStorage.setItem("token", res.data.token);
      setNombre("");
      setEmail("");
      setPassword("");
    } catch (err) {
      if (err.response && err.response.data && err.response.data.error) {
        setError(err.response.data.error);
      } else if (err.message) {
        setError(`Error de conexión: ${err.message}`);
      } else {
        setError("Error desconocido al registrar. Intenta nuevamente.");
      }
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
