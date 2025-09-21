import { useState } from "react";
import {getGastos, crearGasto, uploadGastosExcel} from "../../services/gastosService";

function CargarGastos({ onAdd }){
    const [form , setForm] = useState({
        fecha: "",
        categoria: "",
        descripcion: "",
        monto: "",
        efectivo: false
    }); 

    const [excelFile, setExcelFile] = useState(null);
    const [mensaje, setMensaje] = useState("");
    const [error, setError] = useState("");
    
    const handleChange = (e) =>{
       const { name, value, type, checked } = e.target; 
         if(type === 'date'){
          setForm({ ...form, [name]: value});
         }else{
           setForm({ ...form, [name]: type === "checkbox" ? checked : value});
         }
    };

    const handleSubmitManual = async (e) => {
       e.preventDefault();
       setMensaje("");
       setError("");
       try{
          const { data } = await crearGasto(form);
          setMensaje("Gasto guardado correctamente");

          if (onAdd) onAdd(data);// notifica al padre si existe

          setForm({
            fecha: "",
            categoria: "",
            descripcion: "",
            monto: "",
            efectivo: false
          });
       }catch(err){
          setError(err.response?.data?.error || "Error al guardar el gasto");
       }
    };

    const handleExcelUpload = async () =>{
        if (!excelFile){
            setError("Selecciona un archivo primero");
            return;
        }
        setMensaje("");
        setError("");
   
    try{
      await uploadGastosExcel(excelFile);
      setMensaje("Archivo subido y procesado correctamente");
      setExcelFile(null);
    }catch(err){
     setError(err.response?.date?.error || "Error al subir archivo");
    }
  }

return(
   <div className="space-y-6">
    {/*Encabezado*/}
     <div>
       <h1 className="text-2xl font-bold text-gray-800">Cargar Gastos</h1>
       <p className="text-gray-500">
         Ingresa tus gastos manualmente o sube un archivo Excel.
       </p>
     </div>
 
   
   {/* Formulario Manual */}
     <form 
       onSubmit={handleSubmitManual} 
       className="bg-white p-4 rounded-lg shadow space-y-4"
     >
        <input 
          type="date"
          name="fecha"
          value={form.fecha} 
          onChange={handleChange}
          className="border rounded px-3 py-2 text-sm w-full"
          required
         />

         <select 
           name="categoria" 
           value={form.categoria}
           onChange={handleChange}
           className="border rounded px-3 py-2 text-sm w-full"
           required
           >
            <option value="">Selecciona categoria</option>
            <option value="Comida">Comida</option>
            <option value="Transporte">Transporte</option>
            <option value="Supermercado">Supermercado</option>
         </select>

         <input 
           type="text"
           name="descripcion"
           value={form.descripcion}
           onChange={handleChange}
           placeholder="Descripcion"
           className="border rounded px-3 py-2 text-sm w-full"
           required 
           />

           <input 
            type="number"
            name="monto" 
            value={form.monto}
            onChange={handleChange}
            placeholder="Monto (€)"
            className="border rounded px-3 py-2 text-sm w-full"
            step="0.01" 
            required
            />

            <label className="flex items-center space-x-2">
                <input 
                  type="checkbox"
                  name="efectivo"
                  checked={form.efectivo}
                  onChange={handleChange}
                  />
                  <span>Pago en efectivo</span>
            </label>

            <button 
               type="submit"           
               className="bg-sky-600 hover:bg-sky-700 text-white px-4 py-2 rounded"
            >
                Guardar gasto
            </button>
       </form>
       
       {/* Subida del Excel */}
        <div className="bg-white p-4 rounded-lg shadow space-y-4">
            <input 
               type="file"
               accept=".xlsx, .xls"
               onChange={(e) => setExcelFile(e.target.files[0])}
               className="border rounded px-3 py-2 text-sm w-full" 
            />

            <button
               onClick={handleExcelUpload} 
               className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded w-full"
            >
              Subir Excel
            </button>
        </div>

        {/* Mensajes */}
        {mensaje && <p className="text-green-600">{mensaje}</p>}
        {error && <p className="text-red-600">{error}</p>}
    </div> 
  );
}

export default CargarGastos;