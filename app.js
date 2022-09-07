const express = require("express");
const con = require("./dbconnection");

con.connect(function (err) {
  if (err) throw err;
  console.log("Connected");
});

var app = express();

app.use(express.urlencoded({ extended: true }));
app.set("view engine", "ejs");

app.get("/", function (req, res) {
  var sql = "CREATE DATABASE IF NOT EXISTS tuhoon_university_db";
  con.query(sql, function (err, result) {
    if (err) throw err;
    console.log(result);
    // res.send("database created");
    res.render("index");
  });
});

// define the routes

var studentRouter = require("./routes/students");
var instructorRouter = require("./routes/instructors");
var courseRouter = require("./routes/courses");
var transactionalRouter = require("./routes/transactionals");

app.use("/students", studentRouter);
app.use("/instructors", instructorRouter);
app.use("/courses", courseRouter);
app.use("/transactionals", transactionalRouter);

// server listener
app.listen(5000, function () {
  console.log("server is now running");
});
