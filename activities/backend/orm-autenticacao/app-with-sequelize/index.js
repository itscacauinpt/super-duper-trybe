const express = require('express')
const app = express()

const PORT = process.env.PORT || 3000;

const userController = require('./src/controller/user');

app.get('/user', userController);
app.listen(PORT, () => console.log(`Example app listening on port ${PORT}!`))