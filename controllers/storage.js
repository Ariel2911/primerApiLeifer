const { storageModel } = require("../models");
const PUBLIC_URL = process.env.PUBLIC_URL;

/* obtiene una lista*/
const getItems = async (req, res) => {
  const data = await storageModel.find({})

  res.send(data);
};

const getItem = async (req, res) => {

};
const createItems = async (req, res) => {
  const { body, file } = req;

  console.log(file)

  const fileData = {
    filename: file.filename,
    url: `${PUBLIC_URL}/${file.filename}`
  } 

  const data = await storageModel.create(fileData);

  res.send({data});
};
const updateItems = async (req, res) => {

};
const deleteItems = async (req, res) => {

};

module.exports = { getItems, getItem, createItems, updateItems, deleteItems };