const express = require("express")
const { roleController } = require('../controllers')

const router = express.Router()

router.post("/new-role", roleController.AddRole)

module.exports = router
