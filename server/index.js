const express = require('express');
const app = express();
const mysql = require('mysql');
const cors = require("cors");
let bcrypt = require("bcrypt");

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
    let verifySQL = "SELECT * FROM users WHERE email = ?";
    //verifica se o email ja esta cadastrado
    db.query(verifySQL, [email], (err, result) =>{
        console.log(result.length);
        if(err){
            res.send(err);
        }
        //caso nao
        if(result.length == 0){
            bcrypt.genSalt(10, function(err, salt) {
                bcrypt.hash(password, salt, function(err, hash) {
                    //registra novo usuario
                    db.query(SQL, [user, hash, email], (err, result) => {
                        console.log(err);
                        res.send({msg: "Usuario cadastrado com sucesso"});
                        console.log("SUCESSO");
                    });
                });
            }); 
        } else {
            res.send({msg: "Usuario com este EMAIL já cadastrado!"});
            console.log("ERRO 2");

        }
    })
});

app.post("/login", (req, res) => {
    const { email } = req.body;
    const { password } = req.body;

    db.query("SELECT * FROM users WHERE email = ?", [email], (err, result) => {
        if(err){
            req.send(err);
        }
        if(result.length > 0){
            bcrypt.compare(password, result[0].password, (error, result) => {
                if(result){
                    res.send("Login efetuado com sucesso!");
                } else {
                    res.send("Senha incorreta!");
                }
            });
        } else {
            res.send({ msg: "Conta não encontrada!" });
        }
    });
});

app.listen(3001, () => {
    console.log('Servidor rodando');
});