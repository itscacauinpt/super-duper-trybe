const bodyParser = require('body-parser');
const express = require('express');
const app = express();
const port = 3000;

const Authors = require('./controller/authorsController');
const Books = require('./controller/booksController');

app.use(bodyParser.json());

app.get('/authors', Authors.getAll);
app.get('/books', Books.getAll);
app.get('/authors/:id', Authors.getById);
app.get('/books/:id', Books.getById);

app.listen(port, () => console.log(`Example app listening on port ${port}!`));