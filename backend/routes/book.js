const express = require('express');
const router = express.Router();

const controlerBook = require('../controllers/book');
const auth = require('../middleware/auth');
const multer = require('../middleware/multer-config');
const sharp = require('../middleware/sharp-config');


router.post('/', auth,  multer, sharp, controlerBook.createBook);
router.put('/:id', auth, multer, controlerBook.updateBook);
router.delete('/:id', auth, controlerBook.deleteBook);
router.get('/:id', auth, multer, controlerBook.getOneBook);
router.get('/', auth, controlerBook.getAllBooks);

module.exports = router;