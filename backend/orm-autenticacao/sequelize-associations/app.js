const express = require('express');

const employeeRoute = require('./src/routes/employeeRoute');
const userBooksRoute = require('./src/routes/userBooksRoutes');

const app = express();

app.use(express.json());

app.use('/employees', employeeRoute);
app.use('/usersbooks', userBooksRoute);

module.exports = app;