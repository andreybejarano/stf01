const express = require('express');
const path = require('path');

const mainRoutes = require('./routes/main');

const app = express();

app.use(express.static(path.join(__dirname, 'public')));

app.use('/', mainRoutes);

app.use((req, res, next) => {
    res.status(404).sendFile(path.join(__dirname, 'views/404.html'))
});

const port = 3000;
app.listen(port, () => {
    console.log(`Servidor iniciado en http://localhost:${port}`);
});