/* index.js */
const express = require('express');
const app = express();

const PORT = 3005;

const recipes = [
  { id: 1, name: 'Lasanha', price: 40.0, waitTime: 30 },
  { id: 2, name: 'Macarrão a Bolonhesa', price: 35.0, waitTime: 25 },
  { id: 3, name: 'Macarrão com molho branco', price: 35.0, waitTime: 25 },
];

app.get('/recipes', function (req, res) {
  res.json(recipes);
});

app.post('/recipes', function (request, response, next){
  const { id, name } = request.body;
  if (!id || id === '' || !name || name === '') return response.status(400).json({ message: 'input inválido' });

  next();
},
function (request, response) {
  const { id, name, price } = request.body;

  recipes.push({ id, name, price });
  response.status(201).json({ message: 'Receita adicionada com sucesso.' });
});

app.listen(PORT, () => {
  console.log('Aplicação ouvindo na porta 3005');
});

// O método .send é um método que consegue retornar a resposta de uma requisição de uma forma genérica, 
// adaptando o tipo do retorno ao que será retornado. Mas, para deixar mais evidente que o que vai ser devolvido é um JSON, utilize o método .json.