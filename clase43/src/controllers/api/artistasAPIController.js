const path = require('path');
const { validationResult } = require('express-validator');

const db = require('../../database/models');

const artistasAPIController = {
    'list': async (req, res) => {
        try {
            const artistas = await db.Artista.findAll();
            return res.json(artistas);
        } catch (error) {
            return res.status(500).send(error);
        }
    },
    create: async (req, res) => {
        try {
            const errors = validationResult(req);
            if (!errors.isEmpty()) {
                throw { errors: errors.array(), status: 400 };
            }
            const { nombre } = req.body;
            const artistaCreado = await db.Artista.create({ nombre });
            return res.status(201).send(artistaCreado);
        } catch (error) {
            return res.status(error.status || 500).send(error);
        }
    },
    update: async (req, res) => {
        try {
            const errors = validationResult(req);
            if (!errors.isEmpty()) {
                throw { errors: errors.array(), status: 400 };
            }
            const { nombre } = req.body;
            await db.Artista.update({ nombre }, { where: { id: req.params.id } });
            const artistaEditado = await db.Artista.findByPk(req.params.id);
            return res.send(artistaEditado);
        } catch (error) {
            return res.status(error.status || 500).send(error);
        }
    },
    destroy: async (req, res) => {
        try {
            const artistaToDelete = await db.Artista.findByPk(req.params.id);
            if (!artistaToDelete) {
                throw { error: 'Artista no encontrado', status: 404 };
            }
            await db.Artista.destroy({ where: { id: req.params.id } });
            return res.send(artistaToDelete);
        } catch (error) {
            return res.status(error.status || 500).send(error);
        }
    }
}
module.exports = artistasAPIController;