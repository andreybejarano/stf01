const db = require('../database/models');

const controller = {
    async list(req, res) {
        try {
            const movies = await db.Movie.findAll();
            res.render('moviesList', { movies });
        } catch (error) {
            res.status(500).send(error);
        }
    },
    async detail(req, res) {
        try {
            const movie = await db.Movie.findByPk(req.params.id);
            res.render('moviesDetail', { movie });
        } catch (error) {
            res.status(500).send(error);
        }
    }
}

module.exports = controller;
