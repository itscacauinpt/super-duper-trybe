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
  // const result = await connection.execute('SELECT id, first_name, middle_name, last_name FROM authors');
  const [ authors ] = await connection.execute('SELECT id, first_name, middle_name, last_name FROM model_example.authors');
  return authors
    .map(serialize)
    .map(addNewKey);
}

module.exports = {
  getAll,
}