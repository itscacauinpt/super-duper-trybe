const express = require('express')
const app = express()
const port = 3000

const Author = require('./models/authors');
const booksModel = require('./models/books');
const { verify, rescue } = require('./middleware-rescue');

app.get('/authors', async (_req, res) => {
  const authors = await Author.getAll();

  res.status(200).json(authors);
});

app.get('/authors/:id', rescue(async (req, res) => {
  const { id } = req.params;
  const authorChosen = await Author.getOne(id);

  if (!id) return res.status(404).json({ message: 'Not found' });

  res.status(200).json(authorChosen);
}));

// Crie uma rota /books para trazer a lista de todos os livros;
app.get('/books', verify, async (_req, res) => {
  const books = await booksModel.getAll();

  res.status(200).json(books);
});

// Altere o middleware da rota books criado no passo 2 para receber uma query string com a chave author_id, e retornar apenas os livros associados.
app.get('/books/:author_id', verify, async (req, res) => {
  const { author_id } = req.params;
  const bookChosen = await booksModel.getByAuthorId(author_id);

  res.status(200).json(bookChosen);
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`))