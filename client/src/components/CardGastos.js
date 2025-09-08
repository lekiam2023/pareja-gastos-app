import { useState} from "react";

function ConsultarGastos(){
    //Simulacion de gastos ficticios
     const [gastos] = useState([
        {id: 1, fecha: "2025-09-01", categoria: "Comida", descripcion: "Restaurante", monto:25.5},
        {id: 2, fecha: "2025-09-03", categoria: "Transporte", descripcion: "Taxi", monto: 15},
        {id: 3, fecha: "2025-09-05", categoria: "Supermercado", descripcion: "Compras", monto: 80.75},
     ]);

     const total = gastos.reduce((sum, gasto) => sum + gasto.monto, 0);

     return(
      <div className="space-y-6">
         {/*Encabezado*/}
         <div>
            <h1 className="text-2xl font-bold text-gray-800">Consultar Gastos</h1>
            <p className="text-gray-500">Visualiza y filtra tus gastos registrados.</p>
         </div>

         {/*Filtros*/}
         <div className="bg-white p-4 rounded-lg flex flex-wrap gap-4 shadow">
            <input 
              type="date"
              className="border rounded px-3 py-2 text-sm"
              placeholder="Fecha inicio"
             />

             <input 
               type="date"
               className="border rounded px-3 py-2 text-sm"
               placeholder="Fecha fin"
              />

              <select className="border rounded px-3 py-2 text-sm">
                 <option value="">Todas las categorías</option>
                 <option value="">Comida</option>
                 <option value="">Transporte</option>
                 <option value="">Supermercado</option>
              </select>

              <button className="bg-sky-600 hover:bg-sky-700 text-white px-4 py-2 rounded">
                 Filtrar
              </button>
         </div>

         {/*Tabla*/}
         <div className="bg-white rounded-lg shadow overflow-x-auto">
            <table className="w-full text-sm text-left text-gray-700">
               <thead className="bg-gray-100">
                  <tr>
                     <th className="px-4 py-2">Fecha</th>
                     <th className="px-4 py-2">Categoria</th>
                     <th className="px-4 py-2">Descripcion</th>
                     <th className="px-4 py-2">Monto (€)</th>
                  </tr>
               </thead>
               <tbody>
                  {gastos.map((gasto) =>(
                    <tr key={gasto.id} className="border-b hover:bg-gray-50">
                     <td className="px-4 py-2">{gasto.fecha}</td>
                     <td className="px-4 py-2">{gasto.categoria}</td>
                     <td className="px-4 py-2">{gasto.descripcion}</td>
                     <td className="px-4 py-2 text-right font-semibold">
                        {gasto.monto.toFixed(2)}
                     </td>
                  </tr>                    
                 ))}
               </tbody>
            </table>
         </div>
           
          {/* Total */}
          <div className="bg-white p-4 rounded-lg shadow text-right">
           <span className="text-gray-500">Total:</span>
           <span className="text-lg font-bold ml-2">${total.toFixed(2)}</span>  
          </div> 
      </div>
     );
  }

  export default ConsultarGastos;