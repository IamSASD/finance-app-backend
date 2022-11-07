const express = require("express")
const router = express.Router()
const actividadesController = require("../controllers/actividades.controller")
//crud
router.post("/", actividadesController.create)
router.get("/", actividadesController.find)
router.get("/:id", actividadesController.findOne)
router.put("/:id", actividadesController.update)
router.delete("/:id", actividadesController.remove)

module.exports = router