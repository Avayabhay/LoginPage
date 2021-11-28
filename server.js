const express = require("express");
const path = require("path");

const app = express();
const PORT = process.env.PORT || 3000;
// console.log(PORT);

app.set("view engine", "ejs");

app.use("/static", express.static(path.join(__dirname, "public")));

//Home Route
app.get("/", (req, res) => {
  //   res.send("Yo! The Project has started!");
  res.render("base", { title: "Login System" });
});

app.listen(PORT, () => {
  console.log("Server started at localhost:3000");
});
