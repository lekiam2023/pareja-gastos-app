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
        className="bg-white p-8 rounded-lg shadow-md w-full max-w-md flex flex-col"
      >
        <h2 className="text-2xl font-bold mb-6 text-center">Registro de Usuario</h2>

        <input
          type="text"
          placeholder="Nombre"
          value={nombre}
          onChange={(e) => setNombre(e.target.value)}
          required
          className="p-3 mb-4 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-indigo-500"
        />

        <input
          type="email"
          placeholder="Correo"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          className="p-3 mb-4 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-indigo-500"
        />

        <input
          type="password"
          placeholder="Contraseña"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          className="p-3 mb-4 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-indigo-500"
        />

        <button
          type="submit"
          className="p-3 bg-indigo-600 text-white font-semibold rounded hover:bg-indigo-700 transition-colors"
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
