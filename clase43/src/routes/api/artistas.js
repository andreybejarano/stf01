const express = require('express');
const router = express.Router();

const artistasAPIController = require('../../controllers/api/artistasAPIController');
const { artistaValidator } = require('../../middlewares/artistaValidatorMiddleware');

//Rutas
//Listado de todos los artistas
router.get('/', artistasAPIController.list);
//Agregar un artista
router.post('/', artistaValidator, artistasAPIController.create);
//Modificar un artista
router.put('/:id', artistaValidator, artistasAPIController.update);
//Eliminar un artista
router.delete('/:id', artistasAPIController.destroy);

module.exports = router;