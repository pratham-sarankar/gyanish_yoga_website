var express = require("express");
var router = express.Router();

/* GET home page. */
router.get("/", function (req, res) {
  res.render("index");
});
router.get("/home", function (req, res) {
  res.render("index");
});

router.get("/schedule", (req, res) => {
  res.render("schedule");
});
router.get("/shop", (req, res) => {
  res.render("shop");
});
router.get("/contact", (req, res) => {
  res.render("contact");
});

module.exports = router;
