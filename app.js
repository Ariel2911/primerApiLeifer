require('dotenv').config();
const express = require("express");
const cors = require('cors');
const loggerStream =  require("./utils/handleLogger");
const morgaBody = require("morgan-body");
const dbConnectMongo = require('./config/mongo');
const app = express();
const ENGINE_DB = process.env.ENGINE_DB;
const { dbConnectSql } = require("./config/mariadb");

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

(ENGINE_DB === "nosql") ? dbConnectMongo() : dbConnectSql();
