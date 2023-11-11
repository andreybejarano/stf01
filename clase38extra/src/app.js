require('dotenv').config();
const express = require('express');
const path = require('path');
const expressSession = require('express-session');
const cookieParser = require('cookie-parser');

const userRoutes = require('./routes/user');

const app = express();

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.use(express.static(path.join(__dirname, 'public')));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(expressSession({
    secret: process.env.SECRET
}));
app.use(cookieParser());

app.use('/user', userRoutes);

app.use((req, res, next) => {
    return res.status(404).render('404');
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Server started http://localhost:${port}`);
});