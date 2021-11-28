var express = require("express");
var path = require("path");
var router = express.Router();

const credentials = {
  email: "admin@gmail.com",
  password: "admin1234",
};

router.post("/login", (req, res) => {
  if (
    req.body.email == credentials.email &&
    req.body.password == credentials.password
  ) {
    req.session.user = req.body.email;
    // res.end("Welcome to the DashBoard!");
    res.redirect("/route/dashboard");
  } else {
    res.send("Invalid email or password");
  }
});

router.get("/dashboard", (req, res) => {
  if (req.session.user) {
    res.render("dashboard", { user: req.session.user });
  } else {
    res.end("UnAuthorized User");
  }
});

router.get("/logout", (req, res) => {
  req.session.destroy((err) => {
    if (err) {
      console.log(err);
    } else {
      res.render("base", {
        title: "Logged Out",
        logout: "You have successfully logged out!",
      });
    }
  });
});

module.exports = router;
