import API from "../api/apiClient";


export const getGastos = () => API.get("/api/gastos");

export const createGasto = (data) => API.post("/api/gastos", data);

export const uploadGastosExcel = (file) =>{
   const formData = new FormData();
   formData.append("file", file);
   return API.post("/api/gastos/excel", formData, {
    headers: { "Content-Type": "multipart/form-data" }
   });
};
