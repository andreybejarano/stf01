const db = require('../database/models');


const genresController = {
    async list (req, res) {
        try {
            const genres = await db.Genre.findAll({include: ['movies']});
            res.render('genresList', { genres });
        } catch (error) {
            res.status(500).send(error);
        }
    },
    async detail(req, res) {
        try {
            const genre = await db.Genre.findByPk(req.params.id);
            res.render('genresDetail', { genre });
        } catch (error) {
            res.status(500).send(error);
        }
    }

}

module.exports = genresController;