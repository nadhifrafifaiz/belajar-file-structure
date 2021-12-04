const express = require("express")
const { addressController } = require('../controllers')

const router = express.Router()

router.get("/", addressController.GetAddress);
router.patch("/:id", addressController.EditAddress);

module.exports = router
