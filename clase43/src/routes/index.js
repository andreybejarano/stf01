var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index');
});

router.get('/artistas/create', (req, res) => {
  res.render('formCreateArtist');
})

module.exports = router;
