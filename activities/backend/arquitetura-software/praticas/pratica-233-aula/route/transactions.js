const route = require('express').Router();

const controller= require('../controller/transaction');

route.post('/buy', controller.buyBTC);
route.post('/sell', controller.sellBTC);

module.exports = route;