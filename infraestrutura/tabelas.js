class Tabelas{
    //Iniciar conexacao
    init(conexao){
        this.conexao = conexao
        //Executar criacao da tabela
        this.criarAtendimentos()
    }
    
    criarAtendimentos(){
        //Construção de campos da tabela
        const sql = 'CREATE TABLE IF NOT EXISTS Atendimentos (id int NOT NULL AUTO_INCREMENT, cliente varchar(50) NOT NULL, pet varchar(20), servico varchar(20) NOT NULL, status varchar(20) NOT NULL, observacoes text, PRIMARY KEY(id))'

        //Criar tabela atendimento
        this.conexao.query(sql, erro => {
            if(erro){
                console.log(erro)
            }
            else{
                console.log('Tabela Atendimentos criada com sucesso')
            }
        })
    }
}

//Exportar tabelas
module.exports = new Tabelas