require('dotenv').config();
const express = require("express");
const cors = require('cors');
const loggerStream =  require("./utils/handleLogger");
const morgaBody = require("morgan-body");
const dbConnect = require('./config/mongo');
const app = express();

app.use(cors());
app.use(express.json());
app.use(express.static("storage"));

morgaBody(app, {
  noColors: true,
  stream: loggerStream,
  skip: function(req, res){

    return res.statusCode < 400; //omite códigos menores a 400
  }

});

const port = process.env.PORT || 3000;

/* Rutas */ 
app.use('/api', require('./routes'));

app.listen(port, () => {
  console.log(`conectado en el puerto ${port}...`)
}); 

dbConnect();
