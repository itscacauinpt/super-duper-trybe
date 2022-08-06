const bodyParser = require('body-parser');
const express = require('express')
const app = express()
const port = 3000

const Author = require('./models/authors');
const BooksModel = require('./models/books');
const { verifyId, rescue, verifyAuthorPost, verifyBookPost } = require('./middleware-rescue');

app.use(bodyParser.json());

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
app.get('/books', async (_req, res) => {
  const books = await BooksModel.getAll();

  res.status(200).json(books);
});

// Altere o middleware da rota books criado no passo 2 para receber uma query string com a chave author_id, e retornar apenas os livros associados.
app.get('/books/:author_id', verifyId, async (req, res) => {
  const { author_id } = req.params;
  const bookChosen = await BooksModel.getByAuthorId(author_id);

  res.status(200).json(bookChosen);
});

//post novo author
app.post('/authors', verifyAuthorPost, async (req, res) => {
	const { first_name, middle_name, last_name } = req.body;

	await Author.create(first_name, middle_name, last_name);

	res.status(201).json({ message: 'Autor criado com sucesso! '});
});

//post novo livro
app.post('/books', verifyBookPost, async (req, res) => {
  const { title, author_id } = req.body;

  await BooksModel.create(title, author_id);

  res.status(201).json({ message: 'Livro criado com sucesso!' });
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`))