const app = require('./server');

const hostname = '127.0.0.1';
const port = 3000;


app.listen(port, hostname, () => {
  console.log(`\n Perfil Profissional API running at http://${hostname}:${port}... \n`);
});
