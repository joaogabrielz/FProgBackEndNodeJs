const express = require('express');
const router = express.Router();

const perfilService = require('../services/PerfilService');
const { verificarCredenciais } = require('../Middlewares/AutenticacaoMiddleware');

// Perfil Routes
router.get('/', perfilService.buscarUltimosPerfis);

router.get('/:id',perfilService.buscarPerfilPorId);

router.post('/', perfilService.cadastrarPerfil);

router.put('/:id',verificarCredenciais, perfilService.editarPerfil);

router.post('/conexao',verificarCredenciais, perfilService.conectarPerfis)

module.exports = router;