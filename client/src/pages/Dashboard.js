import { useEffect, useState } from "react";
import Card from "../components/CardView";
import Dashboard2 from "./NewDashboard";

function Dashboard() {
  const [username, setUserName] = useState("Usuario");

  useEffect(() => {
    const userData = localStorage.getItem("user");
    if (userData) {
      try {
        const storedUser = JSON.parse(userData);
        if (storedUser?.nombre) {
          setUserName(storedUser.nombre);
        }
      } catch (error) {
        console.log("Error al parsear el usuario:", error);
      }
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    window.location.href = "/login";
  };

  return (
    <>
    <Dashboard2 />
    </>
  );
}

export default Dashboard;
