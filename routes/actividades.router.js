const express = require("express")
const router = express.Router()
const actividadesController = require("../controllers/actividades.controller")
//crud
router.post("/", actividadesController.create)
router.get("/", actividadesController.find)

module.exports = router