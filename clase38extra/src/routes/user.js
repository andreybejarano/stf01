const express = require('express');
const multer = require('multer');

const userController = require('../controllers/userController');

const router = express.Router();

router.get('/register', userController.register);
router.post('/register', userController.store);

module.exports = router;