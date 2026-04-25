const connection = require('./db');

module.exports.register = async(id,nome_completo,email,mensagem) =>{
    const [result] = await connection.query("INSERT INTO contato values(?,?,?,?)",[id,nome_completo,email,mensagem])
    .catch(erro => console.log(erro));
     return result;
};