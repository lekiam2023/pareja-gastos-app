/*  ---- Capa Logica De Negocio -----
   


*/
const bcrypt = require('bcryptjs');//Importamos libreria para que las contraseñas sen hasheadas y protegidas al mezclarse con el "sal" 
const { createToken } = require('../utils/jwt');//Aca importamos el JSON WEB TOKEN, para que los usuarios que ingresen tengan un TOKEN de seguridad
const User = require('../models/User');//Importamos los usuarios extraidos por las query de la base de datos


/*
Recibimos la peticion POST {correo, password} del frontend de React

-Nosotros respondemos con un token si la contraseña y el correo esta en nuestras bases de datos
*/


//Funcion asincrona que recibe una promesa del modulo de model/User
const login = async (req, res) => {

   try{
   const {email, password, name} = req.body;

   console.log(email);
   console.log(password);
   console.log(name);

   //Buscar al usuario por email
  /*{COMENTARIO PARA TESTING: VALOR ESPERADO DE User: No falsy}*/
   const user = await User.findByEmail(email);
   if (!user) return res.status(404).json({error:"Usuario no encontrado"});

   //Comparar contraseñas usando bcrypt
   const isPasswordCorrect = await bcrypt.compare(password, user.password);
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