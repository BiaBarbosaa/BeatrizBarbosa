const express = require('express');
const client = require('./db');
const routers = require('./routers');

const app = express();

app.use(express.json());
app.use(routers);

client.query('select 1')
.then(()=>{
    console.log('sucess')
    app.listen(8081,function(){
        console.log("Servidor executando na url: http://localhost:8081")
    });
})
.catch(erro => console.log("db connection failed"))