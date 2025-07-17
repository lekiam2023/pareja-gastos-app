const bcrypt = require('bcryptjs');//Importamos libreria para que las contraseñas sen hasheadas y protegidas al mezclarse con el "sal" 
const { createToken } = require('../utils/jwt');//Aca importamos el JSON WEB TOKEN, para que los usuarios que ingresen tengan un TOKEN de seguridad
const User = require('../models/User');//Importamos los usuarios extraidos por las query de la base de datos

const login = async (req, res) => {

   try{
   const {email, password} = req.body;

   //Buscar al usuario por email
   const user = await User.findByEmail(email);
   if (!user) return res.status(404).json({error:"Usuario no encontrado"});

   //Comparar contraseñas usando bcrypt
   const isPasswordCorrect = await bcrypt.compare(password, User.password);
   if(!isPasswordCorrect) return res.status(401).json({error:"Contraseña incorrecta"});

   //Genera el token con la info del usuario
   const token = createToken({id: user.id, role: user.rol});

   res.json({
      token,
      user:{id: user.id,
      nombre: user.nombre,
      role: user.rol
   }
 });
}catch(err){
   console.log('Error en login:', err);
   res.status(500).json({error:'Error interno del servidor'})
}
};

module.exports = {login};