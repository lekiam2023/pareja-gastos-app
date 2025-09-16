import { useState, useEffect } from "react";
import { getGastos } from "../services/gastosService";
import CargarGastos from "../components/gastos/CargarGastos";
import CardGastos from "../components/gastos/CardGastos";

export default function GastosPage() {
   const [gastos, setGastos] = useState([]);


    useEffect(() => {
         getGastos().then(({ data }) => setGastos(data));
      },[]);
    
    const handleAddGasto = (nuevo) => {
         setGastos([...gastos, nuevo]);
      };

      return(
        <div className="p-6 space-y-8">
            <CargarGastos onAdd={handleAddGasto} />
            <CardGastos gastos={gastos} />
        </div> 
  );
}