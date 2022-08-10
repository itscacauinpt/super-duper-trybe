const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(express.json());

app.use(bodyParser.urlencoded({ extended: false }));
// Returns middleware that only parses urlencoded bodies and only looks at requests where the Content-Type header matches the type option

app.use('/products', require('./controllers/productController'));

app.listen(3000, () => {
  console.log('App listening on port 3000!');
});