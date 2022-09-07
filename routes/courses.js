const express = require("express");
const router = express.Router();
const con = require("../dbconnection");

router.get("/", function (req, res) {
  var sql =
    "CREATE TABLE IF NOT EXISTS courses(id INT AUTO_INCREMENT,coursename VARCHAR(50),instructorId VARCHAR(50),primary key (id))";
  con.query(sql, function (err, results) {
    if (err) throw err;
    console.log("courses table created");
  });
  sql = "SELECT * FROM courses";
  con.query(sql, function (err, results) {
    if (err) throw err;
    res.send(results);
  });
});

module.exports = router;
