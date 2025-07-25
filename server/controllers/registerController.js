const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const {findByEmail, createUser} = require('../models/User');

const registerUser = async (req, res) =>{
 const { nombre, email, password } = req.body;

 try{

    if(!nombre || !email || !password){
      return res.status(400).json({error: "Todos los campos son requeridos"});
    }

   const existingUser = await findByEmail(email);
    if(existingUser){
     return res.status(400).json({ error: 'El usuario ya existe' });
 }

 const hashedPassword = await bcrypt.hash(password, 10);

 //Creamos el usuario en la BD
 await createUser(nombre, email, hashedPassword);
 const newUser = await findByEmail(email); 

 const token = jwt.sign({ id: newUser.id}, process.env.JWT_SECRET,{expiresIn: '1d'});

 res.status(201).json({
    message: 'Usuario registrado correctamente',
    user:{
        id: newUser.id,
        nombre: newUser.nombre,
        email: newUser.email,
        rol: newUser.rol,
    },
    token
 });
 }catch(error){
    console.log('Error en el registro:', error);
    res.status(500).json({ error:'Error interno del servidor' });
 }
};

module.exports = { registerUser };
