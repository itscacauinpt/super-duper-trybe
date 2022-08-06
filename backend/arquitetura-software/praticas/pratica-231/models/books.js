const connection = require('./connection');

// Crie um modelo Book e defina o método getAll para retornar a lista de todos os livros;
async function getAll() {
  const [ books ] = await connection.execute('select id, title, author_id from model_example.books;');
  return books;
}

// Crie um método getByAuthorId no modelo Book, para retornar apenas livros associados com um determinado author_id.
// Altere o middleware da rota books criado no passo 2 para receber uma query string com a chave author_id, e retornar apenas os livros associados.
async function getByAuthorId(authorId) {
  // const [ bookChosen ] = await connection.execute(`select title from model_example.books where author_id = ?;`, [authorId]);
  const query = 'SELECT * FROM model_example.books WHERE author_id=?;';
  const [ bookChosen ] = await connection.execute(query, [ authorId ]);

  return bookChosen;
}

module.exports = {
  getAll,
  getByAuthorId,
}