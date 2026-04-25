const express = require('express');
const cors = require('cors');
const routers = require('./routers');

const app = express();

app.use(express.json());
app.use(cors());//biblioteca necessario para se comunicar com a web
app.use(routers);


    app.listen(8081,function(){
        console.log("Servidor executando na url: http://localhost:8081")
    });

