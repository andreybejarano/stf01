const db = require('../database/models');
const { Op } = require('sequelize');

const controller = {
    async list(req, res) {
        try {
            const movies = await db.Movie.findAll({
                include: [
                    'genre',
                    {
                        model: db.Actor,
                        as: 'actors',
                        // Esto excluye la tabla intermedia
                        through: { attributes: [] },
                        // Esto excluye los campos created_at y updated_at de actors
                        attributes: {
                            exclude: ['created_at', 'updated_at']
                        }
                    }
                ]
            });
            res.render('moviesList', { movies });
        } catch (error) {
            res.status(500).send(error);
        }
    },
    async detail(req, res) {
        try {
            const movie = await db.Movie.findByPk(req.params.id);
            if (!movie) {
                return res.status(404).json({ message: 'Pelicula no encontrada' });
            }
            res.render('moviesDetail', { movie });
        } catch (error) {
            res.status(500).send(error);
        }
    },
    async new(req, res) {
        try {
            const movies = await db.Movie.findAll({
                order: [
                    ['release_date', 'DESC']
                ],
                limit: 5
            });
            res.render('newestMovies', { movies });
        } catch (error) {
            res.status(500).send(error);
        }
    },
    async recomended(req, res) {
        try {
            const movies = await db.Movie.findAll({
                where: {
                    rating: { [Op.gte]: 8 }
                },
                order: [
                    ['rating', 'DESC']
                ]
            })
            res.render('recommendedMovies', { movies });
        } catch (error) {
            res.status(500).send(error);
        }
    },
    async add(req, res) {
        try {
            const genres = await db.Genre.findAll({
                order: [['name', 'asc']]
            });
            res.render('moviesAdd', { genres });
        } catch (error) {
            res.status(500).send(error);
        }
    },
    create(req, res) {
        const newMovie = {
            ...req.body
        };
        db.Movie.create(newMovie)
            .then(() => {
                return res.redirect('/movies');
            })
            .catch((err) => {
                return res.status(500).send(err);
            });
    },
    async edit(req, res) {
        try {
            const movie = await db.Movie.findByPk(req.params.id);
            return res.render('moviesEdit', { Movie: movie });
        } catch (error) {
            return res.status(500).send(error);
        }
    },
    async update(req, res) {
        try {
            await db.Movie.update({ ...req.body }, { where: { id: req.params.id } });
            return res.redirect('/movies');
        } catch (error) {
            return res.status(500).send(error);
        }
    },
    async destroy(req, res) {
        try {
            await db.Actor.destroy({ where: { favorite_movie_id: req.params.id } });
            await db.ActorMovie.destroy({ where: { movie_id: req.params.id } });
            await db.Movie.destroy({ where: { id: req.params.id } });
            return res.redirect('/movies');
        } catch (error) {
            return res.status(500).send(error);
        }
    }
}

module.exports = controller;
