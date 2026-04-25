const mysql = require("mysql2")

const client = mysql.createConnection({
    host:"localhost",
    port: 3306,
    user:"root",
    password:"",
    database:"contato_sweetplanet"
});

module.exports = client;