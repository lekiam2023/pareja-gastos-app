/**
 * Convierte una fecha ISO o YYYY-MM-DD a formato DD/MM/YYYY
 * @param {string} fechaISO - Fecha en formato ISO o YYYY-MM-DD
 * @returns {string} Fecha formateada como DD/MM/YYYY
 */

export const formatFecha = (fechaISO) => {
        if(!fechaISO) return "";
        const date = new Date(fechaISO);
        const day = String(date.getDate()).padStart(2, "0");
        const month = String(date.getMonth() + 1).padStart(2, "0");
        const year = date.getFullYear();
        return `${day}/${month}/${year}`;    
      };