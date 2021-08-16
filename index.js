//Importanto modulos
const customExpress = require('./config/customExpress')
const conexao = require('./infraestrutura/conexao')
const Tabelas = require('./infraestrutura/tabelas')

//Fazer conexao e mostrar erro, caso ocorra
conexao.connect(erro => {
    if(erro){
        console.log(erro)
    }
    else{
        console.log('Conectado ao banco com sucesso')
        
        //Executar conexão de tabelas
        Tabelas.init(conexao)

        //Criando aplicação
        const app = customExpress()

        //Executando aplicação
        //Aplicação escutando na porta 3000 e dando um callback
        app.listen(3000, () => console.log('Servidor rodando na porta 3000'))
    }
})