var express = require("express");
var router = express.Router();
var status = null;

/* GET home page. */
router.get("/", function (req, res) {
  if (req.query.status == "success") res.render("index", { status: "success" });
  res.render("index", { status: " " });
});
router.get("/home/:status", function (req, res) {
  res.render("index", { status: req.params.status });
});

router.get("/about/:status", (req, res) => {
  res.render("about", { status: req.params.status });
});
router.get("/courses/:status", (req, res) => {
  res.render("courses", { status: req.params.status });
});
router.get("/shop/:status", (req, res) => {
  res.render("shop", { status: req.params.status });
});
router.get("/contact/:status", (req, res) => {
  res.render("contact", { status: req.params.status });
});
router.get("/classes/:status", (req, res) => {
  res.render("classes", { status: req.params.status });
});
router.get("/cart/:status", (req, res) => {
  res.render("cart", { status: req.params.status });
});
router.get("/loginRegister", (req, res) => {
  if (req.query.register == "true") {
    console.log("Register");
    res.render("loginRegister", {
      status: req.query.status,
      message: req.query.message,
      userData: req.query.userData,
      register: true,
    });
  } else {
    console.log("login");
    res.render("loginRegister", {
      status: req.query.status,
      message: req.query.message,
      userData: req.query.userData,
      register: false,
    });
  }
});

module.exports = router;
