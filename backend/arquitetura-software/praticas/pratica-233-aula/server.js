const express = require('express')
const app = express()
const port = 3000

require('express-async-errors')
const route = require('./route/transactions');
const rescue = ('./middleware/rescue');

app.use(express.json());
app.use(route);
app.use(rescue);

// app.get('/', (req, res) => res.send('Hello World!'))
app.listen(port, () => console.log(`Example app listening on port ${port}!`))