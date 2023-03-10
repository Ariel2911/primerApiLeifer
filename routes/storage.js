const express = require("express");
const router = express.Router();
const { validatorGetItem } = require("../validators/storage");
const uploadMiddleware = require("../utils/handleStorage");
const { getItems, getItem, createItems, deleteItem } = require("../controllers/storage");

/**
 * lista de items
 */
router.get("/", getItems);

/**
 * Obtener detelle de item
 */
router.get("/:id", validatorGetItem, getItem);

/**
 * Crear un registro
 */
router.post("/", uploadMiddleware.single("myfile"), createItems);

/**
 * Eliminar un registro
 */
router.delete("/:id", validatorGetItem, deleteItem);

module.exports = router;