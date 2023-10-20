const fs = require('fs');
const path = require('path');
const bcrypt = require('bcryptjs');

const usersDataFilePath = path.join(__dirname, '../data/users.json')
function getUsers() {
    return JSON.parse(fs.readFileSync(usersDataFilePath, 'utf-8'));
}

const controller = {
    index(req, res) {
        if (req.session.user) {
            return res.redirect('/profile');
        }
        return res.render('index');
    },
    login(req, res) {
        const users = getUsers();
        const user = users.find((element) => element.email === req.body.email);
        const errors = {
            unauthorized: {
                msg: 'Usuario y/o contraseña incorrecto'
            }
        };
        if (!user) {
            return res.render('index', { errors });
        }
        if (!bcrypt.compareSync(req.body.password, user.password)) {
            return res.render('index', { errors });
        }
        req.session.user = {
            timestamp: Date.now(),
            id: user.id,
            name: user.name,
            email: user.email
        };
        res.cookie('username', req.body.name);
        return res.redirect('/profile');
    },
    profile(req, res) {
        const { user } = req.session;
        return res.render('profile', { user });
    },
    logout(req, res) {
        req.session.user = undefined;
        res.clearCookie('username');
        return res.redirect('/');
    },
    register(req, res) {
        return res.render('register');
    },
    registerProcess(req, res) {
        const users = getUsers();
        const user = {
            id: users[users.length - 1] ? users[users.length - 1].id + 1 : 1,
            ...req.body,
            password: bcrypt.hashSync(req.body.password, 10)
        };
        users.push(user);
        fs.writeFileSync(usersDataFilePath, JSON.stringify(users, null, 4));
        return res.redirect('/');
    }
};

module.exports = controller;