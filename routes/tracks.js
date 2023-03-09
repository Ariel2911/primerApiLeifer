const express = require('express');
const router = express.Router();
const { validatorCreateItem } = require("../validators/tracks");
const customHeader = require("../middleware/customHeader");
const { getItems, getItem, createItems } = require('../controllers/tracks');

router.get("/", getItems)

router.get("/:id", getItem);

router.post("/", validatorCreateItem, customHeader, createItems)

module.exports = router;
