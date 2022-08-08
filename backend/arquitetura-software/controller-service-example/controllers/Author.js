const Author = require('../services/Author');

async function getAll(_req, res) {
  const authors = await Author.getAll();
  res.status(200).json(authors);
}

async function getById(req, res){
  const { id } = req.params;
  const author = await Author.findById(id);
  if (!author) return res.status(404).json({ message: 'Author not found' });
  res.status(200).json(author);
}

async function create(req, res) {
  const { first_name, middle_name, last_name } = req.body;

  const author = await Author.createAuthor(first_name, middle_name, last_name);

  if (!author) return res.status(400).json({ message: 'Dados inválidos' });

  res.status(201).json(author);
}
module.exports = {
  getAll,
  getById,
  create,
}

// para quem passar a requisição? serviço!
