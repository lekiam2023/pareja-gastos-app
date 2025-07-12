const Gasto = require('../models/Gasto');

const calcularSaldo = async (req, res) =>{

    const totales = await Gasto.getTotales();

    if(totales.length < 2){
     return res.status(400).json({error:"Faltan usuarios para calcular el pago"});
    }

    const [a, b] = totales;
    const diferencia = a.total - b.total;
    if(diferencia === 0)return res.json({mensaje:"Estan a mano"});

    const paga = diferencia > 0 ? b.user_id : a.user_id;
    const cobra = diferencia > 0 ? a.user_id : b.user_id;
    const monto = Math.abs(diferencia / 2); 

    res.json({
     mensaje: `El usuario ${paga} debe pagar € ${monto.toFixed(2)} a ${cobra}`,
     paga,
     cobra,
     monto,
    });
};

module.exports = {calcularSaldo};