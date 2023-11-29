const path = require('path');
const db = require('../../database/models');

const albumesAPIController = {
    'list': async (req, res) => {
        try {
            const albumes = await db.Album.findAll({ include: ['artista'] });
            return res.json(albumes);
        } catch (error) {
            return res.status(500).send(error);
        }
    },

    'detail': async (req, res) => {
        try {
            const album = await db.Album.findOne({ where: { id_artista: req.params.id } });
            return res.send(album);
        } catch (error) {
            return res.status(500).send(error);
        }
    }
}

module.exports = albumesAPIController;