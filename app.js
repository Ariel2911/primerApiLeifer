require('dotenv').config();
const express = require("express");
const cors = require('cors');
const dbConnect = require('./config/mongo')
const app = express();

app.use(cors());
app.use(express.json());

const port = process.env.PORT || 3000;

/* Rutas */ 
app.use('/api', require('./routes'))

app.get('/', (req, res) => {
  res.send('funciona!')
});


app.listen(port, () => {
  console.log(`conectado en el puerto ${port}...`)
}); 

dbConnect();
