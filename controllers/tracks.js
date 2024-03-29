const { matchedData, body } = require("express-validator");
const { tracksModel } = require("../models")
const { handleHttpError } = require("../utils/handleError");

/**
 * Obtener lista de la base de datos
 * @param {*} req 
 * @param {*} res 
 */
const getItems = async (req, res) => {

  try {

    const user = req.user;

    const data = await tracksModel.findAllData({});
    
    res.send({ data, user });
    
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

  try {

    const {id} = matchedData(req);

    const data = await tracksModel.findOneData(id);

    res.send({ data });

  } catch (error) {

    handleHttpError(res,"ERROR_GET_ITEM");

  };

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
const updateItem = async (req, res) => {

  try {

    const {id, ...body} = matchedData(req);

    const data = await tracksModel.findOneAndUpdate(
      id, body
    );

    res.send({data});

  } catch (error) {

    handleHttpError(res, "ERROR_UPDATE_ITEM");

  }
};

/**
 * Borrar un registro
 * @param {*} req 
 * @param {*} res 
 */
const deleteItem = async (req, res) => {
  
  try {
    
    const {id} = matchedData(req);

    const data = await tracksModel.delete({_id:id});

    res.send({ data });

  } catch (error) {
    
    handleHttpError(res, "ERROR_DELETE_ITEM");

  }

};

module.exports = { getItems, getItem, createItems, updateItem, deleteItem };
