const express = require('express')
const app = express();

const perfilRoute = require('./routes/PerfilRoute');
const notificacaoRoute = require('./routes/NotificacaoRoute');
const loginRoute = require('./routes/LoginRoute');

app.use(express.json());

app.use('/perfil', perfilRoute); //perfilRoute trata todas rotas /perfil..
app.use('/notificacao', notificacaoRoute); 
app.use('/login', loginRoute); 

// Root '/' Route
app.get('/', (req, res) => {
  res.send("Bem vindo a app Perfil Profissional");
})


module.exports = app;