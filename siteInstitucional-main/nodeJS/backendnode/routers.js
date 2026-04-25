const express = require('express');

const consulta = require('./function');
const routers = express.Router();

routers.get('/',(req,res)=>{
    res.status(200).json({msg:"Bem - vindo(a) a API"})
});

routers.post('/cadastrarCliente',async(req,res)=>{
    const {id,nome_completo,email,mensagem} = req.body;
    console.log(req.body);
    try{
        const cadastrar = await consulta.register(id,nome_completo,email,mensagem);
        res.status(200).json({msg:"Usuário cadastrado com sucesso"});
    }
    catch(erro){
        console.log(erro)
    }

});


module.exports =  routers;