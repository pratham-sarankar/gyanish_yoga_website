var express = require("express");
var router = express.Router();

/* GET users listing. */
router.get("/", function (req, res, next) {
  res.send("respond with a resource");
});
router.get("/profile", (req, res) => {
  res.render("userProfile");
});
// user login credential will here !!!!!!!!!!!!!!!!!
router.post("/login", (req, res) => {
  //
  //
  // var userName = req.body.name;
  // var userEmail = req.body.email;
  // var userPhone = req.body.phone;
  // var userPassword = req.body.password;
  // var userClassSelection = req.body.class;
  //
  //
});
// user login credential will here !!!!!!!!!!!!!!!!!

// user Register credential will here !!!!!!!!!!!!!!!!!
router.post("/register", (req, res) => {
  //
  //
  // var userName = req.body.name;
  // var userEmail = req.body.email;
  // var userPhone = req.body.phone;
  // var userPassword = req.body.password;
  // var userClassSelection = req.body.class;
  //
  //
});
// user Register credential will here !!!!!!!!!!!!!!!!!

module.exports = router;
