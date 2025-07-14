const express = require('express');
require('dotenv').config();
const cors = require('cors');

const authRoutes = require('./routes/authRoutes');
const gastosRoutes = require('./routes/gastoRoutes');
const pagarRoutes = require('./routes/pagarRoutes');

const app = express();
app.use('/api/login', authRoutes);
app.use('/api/gastos', gastosRoutes);
app.use('/api/pagar', pagarRoutes);

const PORT = process.env.PORT || 4000;
app.listen(PORT, () =>{
    console.log(`Servidor corriendo en el puerto ${PORT}`);
});

