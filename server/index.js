const express = require("express");
const mysql = require("mysql");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

const db = mysql.createPool({
  user: "root",
  host: "localhost",
  password: "password",
  database: "loginsystem",
});

app.use(bodyParser.urlencoded({ extended: true }));

app.post("/register", (reg, res) => {
  const username = reg.body.username;
  const password = reg.body.password;
  db.query(
    "INSERT INTO users (username, password) VALUES (?, ?)",
    [username, password],
    (err, result) => {
      console.log(err, result);
    }
  );
});

// app.get("/", (req, res) => {
//   const sqlstatement =
//     "INSERT INTO users (username, password) VALUES ('poush', '12345');";

//   db.query(sqlstatement, (err, result) => {
//     res.send("<h1>Database for SlideIt!</h1>");
//   });
// });

app.listen(3001, () => {
  console.log("running server");
});
