const express = require('express');
const session = require('express-session');
const cookieParser = require('cookie-parser')

const path = require('path');

const mainRouter = require('./routers/main');

const app = express();

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.use(express.static(path.join(__dirname, 'public')));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(session({ secret: "SECRET" }));
app.use(cookieParser())

app.use('/', mainRouter);

const port = 3000;
app.listen(port, () => {
    console.log(`server iniciado http://localhost:${port}`);
});
