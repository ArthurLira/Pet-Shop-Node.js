//Importando atendimento
const Atendimento = require('../models/atendimento')

module.exports = app => {
    //GET da rota atendimento
    app.get('/atendimentos', (req, res) => {
        Atendimento.lista(res)
    })

    app.get('/atendimentos/:id', (req, res) => {
        const id = parseInt(req.params.id)

        Atendimento.buscaPorId(id, res)
    })
    //POST da rota atendimento
    app.post('/atendimentos', (req, res) => {
        const atendimento = req.body
        //Adicionando valores do site para a tabela de atendimento
        Atendimento.adiciona(atendimento, res)
    })
}
