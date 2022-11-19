const express = require("express");
const router = express.Router();
const UserController = require('../controllers/user_controller')
const User = require('../models/user')

router.post("/login", async (req, res) => {
  const result = await UserController.login(req);
  console.log(result);
  res.json(result);
});

router.post("/register", async (req, res) => {
  const result =await UserController.register(req);
  res.json(result);
});

module.exports = router;
