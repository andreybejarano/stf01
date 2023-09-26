const express = require('express');
const path = require('path');

const mainRoutes = require('./routes/main');

const app = express();

app.use(express.static(path.join(__dirname, 'public')));

app.use('/', mainRoutes);

app.use((req, res, next) => {
    res.status(404).send("Sorry can't find that!")
});

const port = 3000;
app.listen(port, () => {
    console.log(`Servidor iniciado en http://localhost:${port}`);
});