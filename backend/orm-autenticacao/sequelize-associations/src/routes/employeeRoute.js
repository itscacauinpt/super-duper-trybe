const route = require('express').Router();

const employee = require('../controllers/employee');

route.get('/', employee.getAll);
route.get('/:id', employee.getById);

module.exports = route;