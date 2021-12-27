const express = require ('express');
const mysql = require ('mysql');
const cors = require("cors");

const app = express();

app.use(express.json());
app.use(cors());

const db = mysql.createConnection({
    user: "root",
    host: "localhost",
    password: "password",
    database: "LoginSystem",
});

app.post('/register',(reg, res) => {
    const username =  reg.body.username;
    const password =  reg.body.password;
    db.query(
        "INSERT INTO users (username, password) VALUES (7, 7)",
        [username, password], 
        (err, result)=>{
            console.log(err); 
    });
});
app.listen(3001, () =>{
    console.log("running server");
});