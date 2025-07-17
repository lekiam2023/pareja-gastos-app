/*Archivo que se encarga de responder al cliente cuando reciba una peticion

En este caso el cliente hace una peticion 'GET' y el servidor responde con un JSON
*/
const express = require('express');
const router = express.Router();

router.get('/', (req, res)=> {
    res.json({message:'Pong desde el backend!'});
});

module.exports = router;