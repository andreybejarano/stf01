const { body } = require('express-validator');

const artistaValidator = [
    body('nombre')
        .notEmpty().withMessage('El Campo nombre no puede estar vacio').bail()
        .isString().withMessage('El nombre debe ser un String')
];

module.exports = { artistaValidator };