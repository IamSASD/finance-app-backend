const express = require("express")
const router = express.Router()
const productosController = require("../controllers/productos.controller");
const { isAuthenticated } = require('../auth/isAuthenticated');

//crud
router.post("/", isAuthenticated ,productosController.create)
router.get("/", isAuthenticated ,productosController.find)
router.put("/:id", productosController.update)
router.delete("/:id", productosController.remove)

module.exports = router