const bodyParser = require('body-parser');
const express = require('express');
const app = express();
const port = 3000;

const controller = require('./controller/authorsController');

app.use(bodyParser.json());

app.get('/users', controller.getAll);

app.listen(port, () => console.log(`Example app listening on port ${port}!`));