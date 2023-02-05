const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;

let nomes = [
  'Joao da silva',
  'Maria de souza',
  'Ze do caixao',
  'fernando siqueira'
]

const server = http.createServer((req, res) => {
  if(req.method === "GET"){
    res.statusCode = 200;
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(nomes))
  }
  else if(req.method === "POST"){
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end('method Post ainda nao disponviel');
  }
  
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});