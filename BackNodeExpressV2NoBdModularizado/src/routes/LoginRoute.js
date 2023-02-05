const express = require('express');
const router = express.Router();

const loginService = require('../services/LoginService');

// Login Route
router.post('/', loginService.autenticar);

module.exports = router;