const express = require('express');
const multer = require('multer');
const path = require('path');

const userController = require('../controllers/userController');

const { userRegisterValidator } = require('../middlewares/userValidator')

const router = express.Router();

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, path.join(__dirname, '../public/img/users'))
    },
    filename: (req, file, cb) => {
        const ext = path.extname(file.originalname);
        cb(null, `${file.fieldname}-${Date.now()}${ext}`)
    }
});
const upload = multer({ storage });

router.get('/register', userController.register);
router.post('/register', upload.single('profile_pic'), userRegisterValidator, userController.store);

module.exports = router;