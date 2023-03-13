const { Sequelize } = require("sequelize");

const database = process.env.MARIADB_DATABASE;
const username = process.env.MARIADB_USER;
const password = process.env.MARIADB_PASSWORD;
const host = process.env.MARIADB_HOST;

const sequelize = new Sequelize(
  database,
  username,
  password,
  {
    host,
    dialect: 'mariadb'
  }
);

const dbConnectSql = async () => {

  try {

    await sequelize.authenticate();

    console.log("MariaDB conexión correcta");
        
  } catch (error) {
    
    console.log("MariaDB error de conecxión", error);

  }
  
};

module.exports = { sequelize, dbConnectSql };