const { validationResult } = require('express-validator');

const controller = {
    index(req, res) {
        return res.render('user', { user: req.user });
    },
    create(req, res) {
        return res.render('userCreate');
    },
    store(req, res) {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.render('userCreate', { 
                errors: errors.mapped(),
                oldData: req.body
            });
        }
        return res.send({...req.body, img: req.file.filename});
    }
};

module.exports = controller;