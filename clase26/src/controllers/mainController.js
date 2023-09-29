const controller = {
    index(req, res) {
        res.render('index', { name: 'Andrey BEjarano' });
    },
    getMenuDetail(req, res) {
        res.render('detalleMenu', { name: 'Andrey BEjarano' });
    }
};

module.exports = controller;