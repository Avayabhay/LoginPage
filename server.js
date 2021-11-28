const express = require("express");
const path = require("path");
const bodyparser = require("body-parser");
const session = require("express-session");
const { v4: uuidv4 } = require("uuid");
const router = require("./router");

const app = express();
const PORT = process.env.PORT || 3000;
// console.log(PORT);

app.set("view engine", "ejs");

app.use(bodyparser.json());
app.use(bodyparser.urlencoded({ extended: true }));
app.use("/static", express.static(path.join(__dirname, "public")));
app.use(
  session({
    secret: uuidv4(),
    resave: false,
    saveUninitialized: true,
  })
);
app.use("/route", router);

//Home Route
app.get("/", (req, res) => {
  //   res.send("Yo! The Project has started!");
  res.render("base", { title: "Login System" });
});

app.listen(PORT, () => {
  console.log("Server started at localhost:3000");
});
