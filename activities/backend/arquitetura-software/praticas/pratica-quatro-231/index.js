const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;

const verifyUser = require('./middleware/verifyCreateUser');
const User = require('./models/users');

app.use(bodyParser.json());

app.post('/user', verifyUser, async (req, res) => {
  const { first_name, last_name, email, password } = req.body;

  await User.createUser(first_name, last_name, email, password);

  res.status(201).json({ message: 'Created!' });
});

app.get('/user', async (_req, res) => {
  const users = await User.getAllUsers();

  if (!users) return res.status(200).json([]);

  return res.status(200).json(users);
});

app.get('/user/:id', async (req, res) => {
  const { id } = req.params;

  const user = await User.getUserById(id);

  if (!user) return res.status(404).json({ message: 'User not found' });

  return res.status(200).json(user);
});

// app.put('user/:id', async (req, res) => {

// });

app.listen(port, () => console.log(`Example app listening on port ${port}!`));