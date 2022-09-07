const express = require("express");
const router = express.Router();
const con = require("../dbconnection");

router.get("/", function (req, res) {
  var sql =
    "CREATE TABLE IF NOT EXISTS instructors(id INT AUTO_INCREMENT,firstname VARCHAR(50),lastname VARCHAR(50),DOB DATE,primary key (id))";
  con.query(sql, function (err, results) {
    if (err) throw err;
  });
  sql = "SELECT * FROM instructors";
  con.query(sql, function (err, results) {
    if (err) throw err;
    res.send(results);
  });
});

module.exports = router;
