const url = require("url");
const express = require("express");
const router = express.Router();
const UserController = require("../controllers/user_controller");
const User = require("../models/user");

router.post("/login", async (req, res) => {
  const result = await UserController.login(req);
  var userData;
  try {
    userData = result.data.user.dataValues;
  } catch (e) {}
  if (result.status == "success") {
    res.redirect(
      url.format({
        pathname: "/",
        query: {
          status: "success",
        },
      })
    );
  } else {
    res.render("loginRegister", {
      status: result.status,
      message: result.message,
      userData: userData,
      register: false,
    });
  }
});

router.post("/register", async (req, res) => {
  const result = await UserController.register(req);
  console.log(result);
  var userData;
  try {
    userData = result.data.user.dataValues;
  } catch (e) {}
  if (result.status == "success") {
    res.redirect(
      url.format({
        pathname: "/",
        query: {
          status: "success",
        },
      })
    );
  } else {
    res.redirect(
      url.format({
        pathname: "/loginRegister",
        query: {
          status: result.status,
          message: result.message,
          userData: userData,
          register: true,
        },
      })
    );
  }
});

router.get("/profile/", (req, res) => {
  res.render("userProfile", { status: "success" });
});

module.exports = router;
