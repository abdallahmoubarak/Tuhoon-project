const express = require("express");
const router = express.Router();
const con = require("../dbconnection");

router.get("/", function (req, res) {
  var sql =
    "CREATE TABLE IF NOT EXISTS students(id INT AUTO_INCREMENT,firstname VARCHAR(50),lastname VARCHAR(50),MAJOR VARCHAR(50),DOB DATE,primary key (id))";
  con.query(sql, function (err, results) {
    if (err) throw err;
    console.log("student table created");
  });
  sql = "SELECT * FROM students";
  con.query(sql, function (err, results) {
    if (err) throw err;
    res.send(results);
  });
});

router.get("/:id", function (req, res) {
  var sql =
    "CREATE TABLE IF NOT EXISTS students(id INT AUTO_INCREMENT,firstname VARCHAR(50),lastname VARCHAR(50),MAJOR VARCHAR(50),DOB DATE,primary key (id))";
  con.query(sql, function (err, results) {
    if (err) throw err;
  });
  sql = `SELECT * FROM students WHERE id=${req.params.id}`;
  con.query(sql, function (err, results) {
    if (err) throw err;
    res.send(results);
  });
});

router.post("/", function (req, res) {
  var firstname = req.body.firstname;
  var lastname = req.body.lastname;
  var MAJOR = req.body.MAJOR;
  var DOB = new Date(req.body.DOB).toISOString().slice(0, 19).replace("T", " ");

  var sql =
    "CREATE TABLE IF NOT EXISTS students(id INT AUTO_INCREMENT,firstname VARCHAR(50),lastname VARCHAR(50),MAJOR VARCHAR(50),DOB DATE,primary key (id))";
  con.query(sql, function (err, results) {
    if (err) throw err;
    console.log("student table created");
  });
  sql = `INSERT INTO students(firstname, lastname, MAJOR, DOB) VALUES ('${firstname}', '${lastname}', '${MAJOR}', '${DOB}');`;
  con.query(sql, function (err, results) {
    if (err) throw err;
    res.send("New student has been created");
  });
});

module.exports = router;
