const connection = require('./connection');

const addFullName = ({ id, firstName, middleName, lastName }) => {
  const full = [firstName, middleName, lastName].filter((notEmpty) => notEmpty).join(' ');
  return {
    id, 
    firstName,
    middleName,
    lastName,
    fullName: full,
  }
}

const formated = (all) => {
  const newFormate =  {
    id: all.id,
    firstName: all.first_name,
    middleName: all.middle_name,
    lastName: all.last_name,
  }
  return addFullName(newFormate);
}

async function getAll() {
  const [ authors ] = await connection.execute('SELECT id, first_name, middle_name, last_name FROM model_example.authors');
  return authors.map(formated);
}

async function getOne(id) {
  const query = 'SELECT id, first_name, middle_name, last_name FROM model_example.authors where id=?;';
  const [ author ] = await connection.execute(query, [id])
  return author.map(formated);
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