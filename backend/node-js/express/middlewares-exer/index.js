const express = require('express');
const bodyParser = require('body-parser');
const { response } = require('express');

const app = express();
app.use(bodyParser.json());

const recipes = [
  { id: 1, name: 'Lasanha', price: 40.0, waitTime: 30 },
  { id: 2, name: 'Macarrão a Bolonhesa', price: 35.0, waitTime: 25 },
  { id: 3, name: 'Macarrão com molho branco', price: 35.0, waitTime: 25 },
];

app.get('/recipes', function (req, res) { //middleware
  res.status(200).json(recipes);
});

app.get('/recipes/search', function (req, res) { 
  const { name, maxPrice } = req.query;
  const filteredRecipes = recipes.filter((r) => r.name.includes(name) && r.price < Number(maxPrice));
  res.status(200).json(filteredRecipes);
});

app.get('/recipes/:id', function (req, res) {
  const { id } = req.params;
  const recipe = recipes.find((r) => r.id === Number(id));
  if (!recipe) return res.status(404).json({ message: 'Recipe not found!'});

  res.status(200).json(recipe);
});

// app.post('/recipes', function (req, res) {
//   const { id, name, price, waitTime } = req.body;
//   recipes.push({ id, name, price, waitTime});
//   res.status(201).json({ message: 'Recipe created successfully!'});
// });
// vamos considerar que temos o seguinte cenário, onde precisamos validar na nossa API de CRUD de receitas se o nome não foi enviado vazio ao cadastrar uma nova receita:
app.post('/recipes', function (request, response, next) {
  const { name } = request.body;
  if (!name || name === '') return response.status(400).json({ message: 'Nome inválido!' });

  next();
},
function (request, response) {
  const { id, name, price } = request.body;

  recipes.push({ id, name, price });
  response.status(201).json({ message: 'Receita criada com sucesso' });
});

app.put('/recipes/:id', function (req, res) {
  const { id } = req.params;
  const { name, price, waitTime } = req.body;
  const recipeIndex = recipes.findIndex((r) => r.id === Number(id));

  if (recipeIndex === -1) return res.status(404).json({ message: 'Recipe not found!' });

  recipes[recipeIndex] = { ...recipes[recipeIndex], name, price, waitTime };

  res.status(204).end();
});

app.delete('/recipes/:id', function (req, res) {
  const { id } = req.params;
  const recipeIndex = recipes.findIndex((r) => r.id === Number(id));

  if (recipeIndex === -1) return res.status(404).json({ message: 'Recipe not found!' });

  recipes.splice(recipeIndex, 1);

  res.status(204).end();
});

app.all('*', function (req, res) {
	return res.status(404).json({ message: `Rota '${req.path}' não existe!`});
});

app.listen(3001, () => {
  console.log('Aplicação ouvindo na porta 3001');
});

// no Express qualquer função passada para uma rota é um middleware
