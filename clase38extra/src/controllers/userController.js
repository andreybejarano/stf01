const db = require('../database/models');

const controller = {
    register(req, res) {
        return res.render('register');
    },
    async store(req, res) {
        try {
            const newUser = {
                ...req.body,
                img: req.file?.filename 
            };
            await db.User.create(newUser);
            return res.redirect('/login');
        } catch (error) {
          return res.status(500).send(error);  
        }
    }
}

module.exports = controller;