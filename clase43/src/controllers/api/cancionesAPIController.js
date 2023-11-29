const path = require('path');
const db = require('../../database/models');

const cancionesAPIController = {
    'list': async (req, res) => {
        try {
            const canciones = await db.Cancion.findAll({ include: ['genero', 'medio'] });
            return res.send(canciones);
        } catch (error) {
            return res.status(500).send(error);
        }
    }
}
module.exports = cancionesAPIController;