const express = require('express');
const jwt = require('jsonwebtoken');

const { login } = require('../controllers/authController');

const router = express.Router();

router.post('/login', login);
module.exports = router;