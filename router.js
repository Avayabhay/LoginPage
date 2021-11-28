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
    res.end("Welcome to the DashBoard!");
  } else {
    res.send("Invalid email or password");
  }
});

module.exports = router;
