const express = require("express");
const router = express.Router();
const UserController = require('../controllers/user_controller')
const User = require('../models/user')

router.post("/login", async (req, res) => {
  let phoneNumber = req.body.phone;
  let userPassword = req.body.password;
  await User.findOne({where:phoneNumber});
});

router.post("/register", async (req, res) => {
  const result =await UserController.createUser(req);
  console.log(result);
  res.json(result);
});

module.exports = router;
