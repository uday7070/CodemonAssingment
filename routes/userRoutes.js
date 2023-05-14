const express = require("express");
const controller = require("../controllers/userController");

const router = express.Router();

router.get("/products/:id", controller.getById);

router.get("/products", controller.getAll);

router.put("/products/:id", controller.updatePrice);

module.exports = router;
