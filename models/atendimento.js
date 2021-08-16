//Importando conexão
const conexao = require('../infraestrutura/conexao')

//Classe que irá trabalhar com a tabela Atendimento
class Atendimento{
    adiciona(atendimento, res){
        //Adicionando valores a tabela atendimento
        const sql = 'INSERT INTO Atendimentos SET ?'
        conexao.query(sql, atendimento, (erro, resultados) =>{
            if(erro){
                res.status(400).json(erro)
            }
            else{
                res.status(201).json(resultados)
            }
        })
    }

    lista(res){
        //Consultando valores na tabela atendimento
        const sql = 'SELECT * FROM Atendimentos'
        conexao.query(sql, (erro, resultados) =>{
            if(erro){
                res.status(400).json(erro)
            }
            else{
                res.status(200).json(resultados)
            }
        })
    }

    buscaPorId(id, res){
        const sql = `SELECT * FROM Atendimentos WHERE id=${id}`

        conexao.query(sql, (erro, resultados) =>{
            const atendimento = resultados[0]
            if(erro){
                res.status(400).json(erro)
            }
            else{
                res.status(200).json(atendimento)
            }
        })
    }
}
//Exportar classe atendimento
module.exports = new Atendimento