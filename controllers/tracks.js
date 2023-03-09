const { matchedData } = require("express-validator");
const { tracksModel } = require("../models")
const { handleHttpError } = require("../utils/handleError");

/**
 * Obtener lista de la base de datos
 * @param {*} req 
 * @param {*} res 
 */
const getItems = async (req, res) => {

  try {

    const data = await tracksModel.find({});
    
    res.send(data);
    
  } catch (error) {

    handleHttpError( res, "ERROR_GET_ITEMS");

  }

};

/**
 * Obtener un detalle
 * @param {*} req 
 * @param {*} res 
 */
const getItem = async (req, res) => {

};

/**
 * Insertar un registro
 * @param {*} req 
 * @param {*} res 
 */
const createItems = async (req, res) => {

  try {
    
    const body = matchedData(req);    
    
    const data = await tracksModel.create(body);
    
    res.send({ data });  
    
  } catch (error) {

    handleHttpError(res, "ERROR_CREATE_ITEMS" );

  }
 
};

/**
 * Actualizar un registro
 * @param {*} req 
 * @param {*} res 
 */
const updateItems = async (req, res) => {

};

/**
 * borrar un registro
 * @param {*} req 
 * @param {*} res 
 */
const deleteItems = async (req, res) => {

};

module.exports = { getItems, getItem, createItems, updateItems, deleteItems };