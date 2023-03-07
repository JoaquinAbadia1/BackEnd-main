const http = require('http');
const port = 8080


const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end('Mi primerasdasdads asdasdhola mundo desde el servidor con NodeJs -update 2');
});

server.listen(port, ()=> {
    console.log(`Servidor corriendo en el puerto ${port}`);
});