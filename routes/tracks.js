const express = require('express');
const router = express.Router();
const { validatorCreateItem, validatorGetItem } = require("../validators/tracks");
const customHeader = require("../middleware/customHeader");
const authMiddleware = require("../middleware/session");
const { getItems, getItem, createItems, updateItem, deleteItem } = require('../controllers/tracks');

/**
 * Lista los items
 */
router.get("/", authMiddleware, getItems)

/**
 * Obtener detalle de utem
 */
router.get("/:id",validatorGetItem , getItem);

/**
 * Crea un registro
 */
router.post("/", validatorCreateItem, customHeader, createItems);

/**
 * Actuslizar un registro
 */
router.put("/:id", validatorGetItem, validatorCreateItem, customHeader, updateItem);

/**
 * Elimina un registro
 */
router.delete("/:id", validatorGetItem, customHeader, deleteItem);

module.exports = router;
