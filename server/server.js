/*Este archivo se encarga de inicializar el servidor
Tambien es donde estan todos los middlewares de rutas y configuracion de respuestas
*/
const express = require('express');
require('dotenv').config();
const cors = require('cors');

const authRoutes = require('./routes/authRoutes');
const gastosRoutes = require('./routes/gastoRoutes');
const pagarRoutes = require('./routes/pagarRoutes');
const registerRoutes = require('./routes/registerRoutes');
const userRoutes = require('./routes/userRoutes');

const app = express();

/*Middlewares Globales*/
app.use(cors({
    origin:'*',
}));
app.use(express.json());


//Rutas
app.use('/api/register', registerRoutes);

app.use('/api/user', userRoutes);
app.use('/api', authRoutes);
app.use('/api/gastos', gastosRoutes);
app.use('/api/pagar', pagarRoutes);

const PORT = process.env.PORT || 4000;
app.listen(PORT, "0.0.0.0", () =>{
    console.log(`Servidor corriendo en el puerto ${PORT}`);
});

