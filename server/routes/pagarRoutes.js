const express = require('express');
const router = express.Router();

const { calcularSaldo } = require('../controllers/pagarController');
const auth = require('../middlewares/authMiddleware');

router.get('/',auth ,calcularSaldo);
module.exports = router;