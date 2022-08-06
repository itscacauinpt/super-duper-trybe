const connection = require('./connection');

const addNewKey = ({ id, firstName, middleName, lastName }) => {
  const full = [firstName, middleName, lastName].filter((notEmpty) => notEmpty).join(' ');
  return {
    id, 
    firstName,
    middleName,
    lastName,
    fullName: full,
  }
}

const serialize = (authorData) => {
  return {
    id: authorData.id,
    firstName: authorData.first_name,
    middleName: authorData.middle_name,
    lastName: authorData.last_name,
  }
}

async function getAll() {
  const [ authors ] = await connection.execute('SELECT id, first_name, middle_name, last_name FROM model_example.authors');
  return authors
    .map(serialize)
    .map(addNewKey);
}

async function getOne(id) {
  const query = 'SELECT id, first_name, middle_name, last_name FROM model_example.authors where id=?;';
  const [ author ] = await connection.execute(query, [id])
  return author
  .map(serialize)
  .map(addNewKey);
}

// adicionando novas pessoas
async function create(firstName, middleName, lastName) {
  const query = 'INSERT INTO model_example.authors (first_name, middle_name, last_name) VALUES (?,?,?)';
  const newAuthor = await connection.execute(query, [firstName, middleName, lastName]);

  return newAuthor;
}

module.exports = {
  getAll,
  getOne,
  create,
}