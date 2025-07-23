/*
Este modulo se encarga de corroborar que el ususario que ingrese sea el
mismo que esta registrado en nuestra base de datos.
*/
const User = require('models/User');

const getProfile = async (req, res) => {
    try{
        /*
        Utilizamos la funcion findById creada en el modulo
        (model/User.js) que nos busca en la BDD por ID
        -Aca se comprueba que lo recibido por el cliente en el req sea
        el mismo ID de la base de datos
         */
        const user = await User.findById(req.user.id);
        if(!user) return res.status(404).json({error:'Usuario no encontrado'});
         
        /*Caso Positivo en el que user no sea 'falsy' */
        res.json({
            id:user.id,
            nombre: user.nombre,
            email: user.email,
            rol: user.rol
        });
      }catch(error){
         console.log('Error al obtener el perfil:', error);
         res.status(500).json({ error:'Error del servidor' });
    }

};

module.exports = { getProfile };