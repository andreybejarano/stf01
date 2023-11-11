const { body } = require('express-validator');

const userRegisterValidator = [
    body('name')
        .notEmpty().withMessage('El nombre es requerido!'),
    body('email')
        .notEmpty().withMessage('El E-mail es requerido!')
        .isEmail().withMessage('El formato del E-mail no valido'),
    body('password')
        .notEmpty().withMessage('El password es requerido!')
        .isLength({ min: 8 }).withMessage('El password debe ser mayor a 8 caracteres!')
];

module.exports = {
    userRegisterValidator
};