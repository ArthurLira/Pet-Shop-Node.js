//Requisitando mysql
const mysql = require('mysql')

//Configurações de conxexao
const conexao = mysql.createConnection({
    host: 'localhost',
    port: 3306,
    user: 'root',
    password: 'admin',
    database: 'agenda-petshop'
})

//Exportar conexao
module.exports = conexao