const connection = require('./connection');

const formated = (allData) => {
  return {
    id: allData.id,
    firstName: allData.first_name,
    lastName: allData.last_name,
    email: allData.email
  }
}

async function getAllUsers() {
  const [ users ] = await connection.execute('select id, first_name, last_name, email from users_pratica.users;');
  return users.map(formated);
}

async function getUserById(id) {
  const query = 'select id, first_name, last_name, email from users_pratica.users where id = ?;';
  const [ userArray ] = await connection.execute(query, [id]);

  if (!userArray[0]) return null;
  return userArray.map(formated)[0];
}

async function createUser(firstName, lastName, email, password) {
  const query = 'INSERT INTO users_pratica.users (first_name, last_name, email, password) VALUES (?, ?, ?, ?);';
  const newUser = await connection.execute(query, [firstName, lastName, email, password]);

  return newUser;
}

module.exports = {
  createUser,
  getAllUsers,
  getUserById,
}