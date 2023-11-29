const path = require('path');
const db = require('../../database/models');

const mediosAPIController = {
    'list': async (req, res) => {
        try {
            const medios = await db.Medio.findAll();
            return res.send(medios);
        } catch (error) {
            return res.status(500).send(error);
        }
    }
}
module.exports = mediosAPIController;