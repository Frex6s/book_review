const express = require('express');
const router = express.Router();

const controlerBook = require('../controllers/book');
const auth = require('../middleware/auth');
const multer = require('../middleware/multer-config');
const sharp = require('../middleware/sharp-config');

router.get('/bestrating', controlerBook.getBestRatedBooks);
router.get('/', controlerBook.getAllBooks);
router.post('/', auth, multer, sharp, controlerBook.createBook);
router.post('/:id/rating', auth, controlerBook.rateBook);
router.put('/:id', auth, multer, controlerBook.updateBook);
router.delete('/:id', auth, controlerBook.deleteBook);
router.get('/:id', controlerBook.getOneBook);

module.exports = router;