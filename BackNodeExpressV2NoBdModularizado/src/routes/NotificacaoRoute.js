const express = require('express');
const router = express.Router();

const notificacaoService = require('../services/NotificacaoService');
const { verificarCredenciais } = require('../Middlewares/AutenticacaoMiddleware');

// Notificacao Routes
router.get('/:id', verificarCredenciais, notificacaoService.buscarNotificacaoPorId);

router.get('/perfil/:id', verificarCredenciais, notificacaoService.buscarNotificacaoPorPerfilId);

router.post('/', verificarCredenciais, notificacaoService.cadastrarNotificacao);

router.put('/lida/:id', verificarCredenciais, notificacaoService.marcarNotificacaoComoLida);

module.exports = router;