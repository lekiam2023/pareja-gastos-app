const express = require('express');
const router = express.Router();
const { crearGasto, obtenerGastos} = require('../controllers/gastoController');
const auth = require('../middlewares/authMiddleware');

router.use(auth);
router.post('/', crearGasto);
router.get('/', obtenerGastos);

module.exports = router;

