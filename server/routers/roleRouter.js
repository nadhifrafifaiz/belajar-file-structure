const express = require("express");
const { roleController } = require("../controllers");

const router = express.Router();

router.post("/new-role", roleController.AddRole);
// POST /post/:id/like
// DELETE /post/:id/like

// GET /transaction/:id/detail

// GET /employee/:id/department
// GET /department/:id/employees

module.exports = router;
