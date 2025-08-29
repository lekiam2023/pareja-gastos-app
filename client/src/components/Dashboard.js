import { useEffect, useState } from "react";

function Dashboard(){

 const [username, setUserName] = useState('Usuario');

  useEffect(() =>{

    const userData = localStorage.getItem('user');

    if(userData){
        try{
           const storedUser = JSON.parse(localStorage.getItem('user'));
             if (storedUser?.nombre){
                setUserName(storedUser.nombre);
            
       }
        }catch(error){
            console.log("Error al parsear el usuario:", error);
        }
    }
}, []);

    const handleLogout = () =>{
        localStorage.removeItem('token');
        localStorage.removeItem('user');
        window.location.href = '/login';//Redirige al Login
    };

    return(
        <div className="p-6 font-sans bg-gray-50 min-h-screen">
            <h2 className="text-2x1 font-bold text-green-600 mb-6">Bienvenido al Dashboard, {username}</h2>

          <div className="flex gap-6">
            <aside className="w-72 bg-white rounded-lg shadow-md p-4 flex flex-col items-center">
               <img
                src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png"
                alt="Foto del Usuario"
                className="w-24 h-24 rounded-full mb-4"
               />
               <ul className="w-full space-y-2">
                  <li className="px-4 py-2 rounded-lg hover:bg-green-100 cursor-pointer transition">
                    Registrar Gastos
                  </li>
                  <li className="px-4 py-2 rounded-lg hover:bg-green-100 cursor-pointer transition">
                    Ver Gastos
                  </li>
                  <li className="px-4 py-2 rounded-lg hover:bg-green-100 cursor-pointer transition">
                    Editar Gastos
                  </li>
                  <li className="px-4 py-2 rounded-lg hover:bg-green-100 cursor-pointer transition">
                    A-pagar
                  </li>
               </ul>
            </aside>
            
            <section className="flex-1 bg-white rounded-lg shadow-md p-6">
                <p className="text-gray-700 text-lg">
                    Seleccione una opción del menú para comenzar
                </p>
            </section>
           </div>
           
           <div className="mt-6">
              <button 
              onClick={handleLogout}
              className="bg-red-500 text-white px-6 py-2 rounded-lg hover:bg-red-600 transition"  
              >Cerrar Sesíon
              </button>
           </div>
        </div>
    );
}

export default Dashboard;