const path = require('path');
const db = require('../../database/models');

const genresAPIController = {
    'list': async (req, res) => {
        try {
            const generos = await db.Genero.findAll();
            return res.send(generos);
        } catch (error) {
            return res.status(500).send(error);
        }
    }
}
module.exports = genresAPIController;