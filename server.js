const express = require("express");
const app = express();
const bodyParser = require("body-parser");
app.use(bodyParser.json());

const mysql = require("mysql");
const con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "task_manager",
});

con.connect(function (err) {
  if (err) {
    console.log("not Connected");
  }
  console.log("Connected");
});
