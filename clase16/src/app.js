const express = require('express');
const path = require('path');

const app = express();

app.use(express.static(path.resolve(__dirname, 'public')));

app.get('/', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'views/index.html'));
});

app.get('/babbage', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'views/babbage.html'));
});

app.get('/berners-lee', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'views/berners-lee.html'));
});

const port = 3030;
app.listen(port, () => {
    console.log(`Servidor iniciado en http://localhost:${port}`);
});
