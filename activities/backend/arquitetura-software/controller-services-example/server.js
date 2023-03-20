const bodyParser = require('body-parser');
const express = require('express');
const app = express();
const port = 3000;

const Authors = require('./controller/authorsController');
const Books = require('./controller/booksController');
const rescue = require('./utils/rescue');

app.use(bodyParser.json());

app.get('/authors', rescue(Authors.getAll));
app.get('/books', rescue(Books.getAll));
app.get('/authors/:id', rescue(Authors.getById));
app.get('/books/:id', rescue(Books.getById));

app.post('/authors', rescue());

app.use((err, _req, res, _next) => {
  console.log(err);

  return res.status(500).json({ code: 500, message: 'Erro no servidor!'});
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));