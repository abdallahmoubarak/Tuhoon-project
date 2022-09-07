var express = require("express");
var router = express.Router();
const con = require("../dbconnection");

router.get("/transactionals", function (req, res) {
  var sql =
    "CREATE TABLE IF NOT EXISTS transactionals(id INT AUTO_INCREMENT,courseId INT,studentId INT,primary key (id))";
  con.query(sql, function (err, results) {
    if (err) throw err;
    console.log("transactionals table created");
  });
  sql = "SELECT * FROM transactionals";
  con.query(sql, function (err, results) {
    if (err) throw err;
    res.send(results);
  });
});

module.exports = router;
