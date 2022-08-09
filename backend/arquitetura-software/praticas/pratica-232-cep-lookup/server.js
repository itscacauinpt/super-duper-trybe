const bodyParser = require('body-parser');
const express = require('express');
const app = express();
const port = 3000;

const CEP = require('./controller/cepController');

app.use(bodyParser.json());

app.get('/ping', (_req, res) => res.status(200).json({ "message": "pong!" }));

app.get('/cep/:cep', CEP.getCep);

app.post('/cep', CEP.newCepAdress);

app.listen(port, () => console.log(`Example app listening on port ${port}!`));