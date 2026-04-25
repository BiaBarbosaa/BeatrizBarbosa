//import das bibli.
const express = require('express');
const connection = require('./db');
const bcrypt = require('bcrypt');
const salt = 10;
const routers = express.Router();

//rota raiz
routers.get('/', (req, res) => {
    res.status(200).json({ msg: "Bem - vindo(a) a API" })
});

//rota para cadastrar alunos
routers.post('/contato', async (req, res) => {
    const { id, nome_completo, email, mensagem } = req.body;
    console.log(req.body);

    // const password = await bcrypt.hash(senha, salt)
    // console.log(password);

    try {
        const contato = connection.query("INSERT INTO contato values(?,?,?,?)", [id, nome_completo, email, mensagem], (erro) => {
            if (erro) {
                res.status(401).json({ msg: "Erro" })
            }
            else {
                res.status(200).json({ msg: "Contato realizado com sucesso" })
            }
        })
    }
    catch (erro) {
        console.log(erro)
    }

});

//rota para realizar o login

// routers.post('/api/login', async (req, res) => {
//     const { email, senha } = req.body;

//     const sql = "SELECT * FROM aluno WHERE email = ?"

//     try {
//         const [rows] = await connection.promise().query(sql, [email, senha])

//         if (rows.length > 0) {
//             const match = await bcrypt.compare(senha, rows[0].senha)

//             //rows[0] significa acessar o array do obj no banco de dados
//             if (match) {
//                 res.status(200).json({ msg: "Sucess", nome: rows[0].nome })
//             }
//             else {
//                 res.status(401).json({ msg: "Email ou senha incorretos" })
//             }
//         }
//         else {
//             res.status(401).json({ msg: "Erro" })
//         }
//     }

//     catch (erro) {
//         console.log(erro)
//     }

// });
module.exports = routers;