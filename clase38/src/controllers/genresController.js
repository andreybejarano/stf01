const db = require('../database/models');


const genresController = {
    async list (req, res) {
        try {
            const genres = await db.Genre.findAll();
            res.render('genresList.ejs', { genres });
        } catch (error) {
            res.status(500).send(error);
        }
    },
    async detail(req, res) {
        try {
            const genre = await db.Genre.findByPk(req.params.id);
            res.render('genresDetail.ejs', { genre });
        } catch (error) {
            res.status(500).send(error);
        }
    }

}

module.exports = genresController;