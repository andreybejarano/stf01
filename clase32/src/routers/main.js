const express = require('express');

const mainController = require('../controllers/mainController');

const isLoggedMiddleware = require('../middlewares/isLoggedMiddleware');

const router = express.Router();

router.get('/', mainController.index);
router.post('/login', mainController.login);
router.get('/profile', isLoggedMiddleware, mainController.profile);
router.get('/logout', mainController.logout);
router.get('/register', mainController.register);
router.post('/register', mainController.registerProcess);

module.exports = router;