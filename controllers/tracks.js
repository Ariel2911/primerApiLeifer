const { tracksModel } = require("../models")
const getItems = async (req, res) => {
  const data = await tracksModel.find({})

  res.send(data);
};
const getItem = async (req, res) => {

};
const createItems = async (req, res) => {
  const { body } = req;

  const data = await tracksModel.create(body);

  res.send({data});
};
const updateItems = async (req, res) => {

};
const deleteItems = async (req, res) => {

};

module.exports = { getItems, getItem, createItems, updateItems, deleteItems };