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
router.get("/about", (req, res) => {
  res.render("about");
});
router.get("/courses", (req, res) => {
  res.render("about");
});
router.get("/shop", (req, res) => {
  res.render("shop");
});
router.get("/contact", (req, res) => {
  res.render("contact");
});
router.get("/cart", (req, res) => {
  res.render("cart");
});

module.exports = router;
