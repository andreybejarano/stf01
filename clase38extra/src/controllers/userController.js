const { validationResult } = require('express-validator');

const db = require('../database/models');

const controller = {
    register(req, res) {
        return res.render('register');
    },
    async store(req, res) {
        try {
            const errors = validationResult(req);
            if (!errors.isEmpty()) {
                return res.render('register', {
                    errors: errors.mapped(),
                    oldData: req.body
                });
            }
            const role = await db.Role.findOne({ where: { name: 'Usuario' } })
            const newUser = {
                ...req.body,
                img: req.file?.filename,
                roles_id: role.id
            };
            await db.User.create(newUser);
            return res.redirect('/login');
        } catch (error) {
            return res.status(500).send(error);
        }
    }
}

module.exports = controller;