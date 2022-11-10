require('dotenv').config();
const express = require("express");
const cors = require('cors');
const app = express();

app.use(cors())

app.get('/', (req, res) => {
  res.send('funciona!')
});

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`conectado en el puerto ${port}...`)
})