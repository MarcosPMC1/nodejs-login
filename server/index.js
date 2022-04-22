const express = require('express');
const app = express();
const mysql = require('mysql');
const cors = require("cors");

const db = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'crud__login',
});

app.use(cors());
app.use(express.json());
//resgitrar
app.post("/register", (req, res) => {
    //parametros no post
    const { user } = req.body;
    const { password } = req.body;
    const { email } = req.body;

    let SQL = "INSERT INTO users ( user, password, email ) VALUES ( ?,?,? )";

    db.query(SQL, [user, password, email], (err, result) => {
        console.log(err);
    });
});

app.get("/getcards", (req, res) => {
    let SQL = "SELECT * from games";

    db.query(SQL, (err, result) => {
        //caso tenha erro mostre senao apenas exibir resultado
        if (err) console.log(err);
        else res.send(result);
    })
})

app.listen(3001, () => {
    console.log('Servidor rodando');
});