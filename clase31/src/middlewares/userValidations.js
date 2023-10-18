const { body } = require('express-validator');

const createUserValidation = [
    body('firstname')
        .notEmpty().withMessage('El Campo nombre es requerido!')
        .isLength({ min: 2 }).withMessage('El nombre debe tener mas de dos caracteres'),
    body('lastname')
        .notEmpty().withMessage('El Campo apellido es requerido!')
];

module.exports = {
    createUserValidation
}