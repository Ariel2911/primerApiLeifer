const bcrypt = require("bcryptjs");

/**
 * Contraseña sin encriptar: hola.01
 * @param {*} passwordPlane 
 * @returns 
 */
const encrypt = async (passwordPlane) => {

  return hash = await bcrypt.hash(passwordPlane, 10);

};

/**
 * Pasar contraseña sin encriptar y pasar contraseña encriptada
 * @param {*} passwordPlane 
 * @param {*} hashPassword 
 */
const compare = async (passwordPlane, hashPassword) => {
  
  return await bcrypt.compare( passwordPlane, hashPassword);
  
};

module.exports = { encrypt, compare };