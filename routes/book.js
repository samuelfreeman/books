// import express router
const { Router } = require('express');
const router = Router();

// import books controllers
const book = require('../controllers/book');

// add router method for each  function inside the book controller
router.get('/', book.greeting);
router.post('/', book.saveBook);
router.get('/read', book.getList);
router.patch('/', book.update);
router.delete('/', book.remove);

// export router
module.exports = router;
