import express from 'express';

const app = express();
const port = 8080

app.get('/saludo', (req, res) => res.send('Hello World! desde sfdsdfexpress'));

app.listen(port, () => { console.log(`Escuchando en el puerto ${port} `)});

