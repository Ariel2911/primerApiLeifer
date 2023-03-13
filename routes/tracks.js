const express = require('express');
const router = express.Router();
const { validatorCreateItem, validatorGetItem } = require("../validators/tracks");
const customHeader = require("../middleware/customHeader");
const authMiddleware = require("../middleware/session");
const checkRol = require("../middleware/rol");

const { getItems, getItem, createItems, updateItem, deleteItem } = require('../controllers/tracks');

/**
 * Lista los items
 */
router.get("/", authMiddleware, getItems)

/**
 * Obtener detalle de utem
 */
router.get("/:id", authMiddleware, validatorGetItem, getItem);

/**
 * Crea un registro
 */
router.post("/", authMiddleware, checkRol(["admin"]), validatorCreateItem, customHeader, createItems);

/**
 * Actuslizar un registro
 */
router.put("/:id", authMiddleware, checkRol(["admin"]), validatorGetItem, validatorCreateItem, customHeader, updateItem);

/**
 * Elimina un registro
 */
router.delete("/:id", authMiddleware, checkRol(["admin"]), validatorGetItem, customHeader, deleteItem);

module.exports = router;
