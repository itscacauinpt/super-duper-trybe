const route = require('express').Router();

const userBooks = require('../controllers/userBooks');

route.get('/:id', userBooks.getOne);

module.exports = route;