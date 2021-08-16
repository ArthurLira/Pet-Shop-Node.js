//Requisitando modulos npm
const express = require('express')
const consign = require('consign')
const bodyParser = require('body-parser')

//Exportando express
module.exports = () => {
    const app = express()
    //Usando o Parser pra enterpretar POSTs
    app.use(bodyParser.urlencoded({extended: true}))
    app.use(bodyParser.json())
    //Incluindo rotas da pasta controler
    consign()
        .include('controllers')
        .into(app)

    return app
}