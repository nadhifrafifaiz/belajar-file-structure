const express = require("express");
const { userController } = require("../controllers");

const router = express.Router();

router.post("/register", userController.Register);
// /login
router.get("/user", userController.GetUser);

module.exports = router;
