const express = require('express');
const connection = require('./db');
const routers = express.Router();

routers.get('/', (req, res) => {
    res.status(200).json({ msg: "Bem - vindo(a) a API" })
});

routers.post('/contato', async (req, res) => {
    const { id, nome_completo, email, mensagem } = req.body;
    console.log(req.body);

    try {
        const contato = connection.query("INSERT INTO contatos values(?,?,?,?)", [id, nome_completo, email, mensagem], (erro) => {
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
module.exports = routers;