const Gasto = require('../models/Gasto');

const crearGasto = async (req, res) => {
 const {descripcion, monto, fecha} = req.body;
 await Gasto.create(req.user.id, descripcion, monto, fecha);
 res.json({succes: true});
};

const obtenerGastos = async (req, res) => {
    const gastos = await Gasto.getByUser(req.user.id);
    res.json(gastos);
};

module.exports = {crearGasto, obtenerGastos}