const express = require('express');
const router = express.Router();

const controlerBook = require('../controllers/book');

router.post('/', controlerBook.createBook);
router.put('/:id', controlerBook.updateBook);
router.delete('/:id',  controlerBook.deleteBook);
router.get('/:id', controlerBook.getOneBook);
router.get('/', controlerBook.getAllBooks);

module.exports = router;