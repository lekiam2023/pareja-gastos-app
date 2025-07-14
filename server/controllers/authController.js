const bcrypt = require('bcryptjs');
const { createToken } = require('../utils/jwt');
const User = require('../models/User');

const login = async (req, res) => {
   const {email, password} = req.body;
   const user = await User.findByEmail(email);
   if (!user) return res.status(404).json({error:"Usuario no encontrado"});

   //Aquí debería usar bcrypt.compare en produccion
   if(password !== user.password) return res.status(401).json({error:"Contraseña incorrecta"});

   const token = createToken({id: user.id, role: user.rol});
   res.json({token, user:{id: user.id, nombre: user.nombre, role: user.rol} });
};

module.exports = {login};