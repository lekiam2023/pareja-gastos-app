/*Este archivo se encarga de inicializar el servidor
Tambien es donde estan todos los middlewares de rutas y configuracion de respuestas
*/
const express = require('express');
require('dotenv').config();
const cors = require('cors');

const pingRoutes = require('./routes/pingRoutes');
const authRoutes = require('./routes/authRoutes');
const gastosRoutes = require('./routes/gastoRoutes');
const pagarRoutes = require('./routes/pagarRoutes');

const app = express();

/*Middlewares Globales*/
app.use(cors({
    origin:'http://localhost:3000'
}));


//Rutas
app.use('/ping', pingRoutes);
app.use('/api/login', authRoutes);
app.use('/api/gastos', gastosRoutes);
app.use('/api/pagar', pagarRoutes);

const PORT = process.env.PORT || 4000;
app.listen(PORT, () =>{
    console.log(`Servidor corriendo en el puerto ${PORT}`);
});

