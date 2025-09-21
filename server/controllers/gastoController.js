const Gasto = require('../models/Gasto');

const crearGasto = async (req, res) => {
  try{
     const {descripcion, monto, fecha} = req.body;
     const userId = req.user.id;
     //const userId=1; //ID fijo de usuario de prueba.  (req.user.id)Sustituido por userId
     
     console.log("Datos que llegan al Backend:", {userId, descripcion, monto, fecha});
     
     await Gasto.create(userId, descripcion, monto, fecha);
     res.json({success: true});
  }catch (err){
    console.error("Error en crearGasto:", err);
    res.status(500).json({error: err.message});
  }
};

const obtenerGastos = async (req, res) => {
   try{ 
      const userId = req.user.id;
      console.log("Obteniendo gastos para usuario:", userId);

      const gastos = await Gasto.getByUser(userId);
      //const userId = 1;//ID fijo de usuario de prueba
      res.json(gastos);
    }catch(err){
        console.error(err);
        res.status(500).json({ error: "Error al obter gastos" });
    }  
};

module.exports = { crearGasto, obtenerGastos };