const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const PORT = 3000;

const Author = require('./controllers/Author');

app.use(bodyParser.json());

app.get('/authors', Author.getAll);

app.get('/authors/:id', Author.getById);

app.post('/authors', Author.create);

app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
});

// requisição? controller!