const route = require('express').Router();

const userBooks = require('../controllers/userBooks');

route.get('/:id', userBooks.getAll);

module.exports = route;