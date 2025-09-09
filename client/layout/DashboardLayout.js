import { useState } from "react";
import Card from "../components/CardView";
import ConsultarGastos from "../src/gastos/CardGastos";
import CargarGastos from "../src/components/gastos/CargarGastos";

function Dashboard2() {
  const [menuOpen, setMenuOpen] = useState(true); // para plegar/desplegar
  const [activeView, setActiveView] = useState("default"); // vista activa

  const renderContent = () => {
    switch (activeView) {
      case "consultar":
        return <ConsultarGastos/>;
      case "modificar":
        return <div>✏️ Modificar Gastos</div>;
      case "introducir":
        return <CargarGastos />;
      case "pagar":
        return <div>💰 A Pagar</div>;
      default:
        return <Card />;
    }
  };

  return (
    <div className="flex flex-row">
      {/* Sidebar */}
      <aside className="w-64 h-screen lg:col-span-3 bg-sky-50">
        <header className="relative pb-4">
          <h1 className="text-xl font-bold tracking-tight text-white text-center truncate bg-sky-600 py-4">
            Maikel Lopez
          </h1>
          <p className="text-sm font-bold tracking-tight text-white text-center bg-sky-600">
            CouplesAccounts
          </p>
        </header>

        <nav className="space-y-1">
          {/* Botón plegable */}
          <div>
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="w-full text-left text-gray-700 px-3 py-2 flex items-center text-sm font-medium hover:bg-gray-200"
            >
              Main
              <svg
                className={`ml-auto w-5 h-5 transform transition-transform ${
                  menuOpen ? "rotate-90" : ""
                }`}
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
              </svg>
            </button>

            {/* Submenú */}
            {menuOpen && (
              <ul className="py-4 bg-white pl-4 space-y-1">
                <li>
                  <button
                    onClick={() => setActiveView("consultar")}
                    className="text-sky-700 w-full text-left px-3 py-1 flex items-center text-sm font-medium hover:bg-sky-100 rounded"
                  >
                    Consultar Gastos
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => setActiveView("modificar")}
                    className="text-gray-600 w-full text-left px-3 py-1 flex items-center text-sm font-medium hover:bg-gray-100 rounded"
                  >
                    Modificar Gastos
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => setActiveView("introducir")}
                    className="text-gray-600 w-full text-left px-3 py-1 flex items-center text-sm font-medium hover:bg-gray-100 rounded"
                  >
                    Introducir Gastos
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => setActiveView("pagar")}
                    className="text-gray-600 w-full text-left px-3 py-1 flex items-center text-sm font-medium hover:bg-gray-100 rounded"
                  >
                    A-Pagar
                  </button>
                </li>
              </ul>
            )}
          </div>
        </nav>
      </aside>

      {/* Contenido */}
      <div className="p-4 flex-1">{renderContent()}</div>
    </div>
  );
}

export default Dashboard2;