const express = require('express')
const app = express()
const PORT = process.env.PORT || 3000

app.get('/', (_req, res) => res.send(`Hello World!\nExample app listening on port ${PORT}!`))
app.listen(PORT, () => console.log(`Example app listening on port ${PORT}!`));