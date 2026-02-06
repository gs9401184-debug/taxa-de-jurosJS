/******************************************************************************************
 * objetivo : Testar as minhas competências
 * Data:      29/02/2026
 * Autor:     Gabriel Sousa
*******************************************************************************************/

// Importe da biblioteca
const readline = require('readline')

// Cria objeto de entrada de dados
const entradaDeDados = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

function iniciarSistema() {
    console.log('----------------------- Aura Store -----------------------')
    // Coleta os dados solicitados 
    entradaDeDados.question('Digite o nome do(a) cliente: ', function (nome) {
        let nomeCliente = nome

        entradaDeDados.question('Digite o nome do Produto: ', function (produto) {
            let nomeProduto = produto

            entradaDeDados.question('Digite o valor do Produto: ', function (valor) {
                let valorProduto = parseFloat(valor.replace(',', '.'))

                entradaDeDados.question('Digite a taxa de juro do produto: ', function (taxa) {
                    let taxaJuros = parseFloat(taxa.replace(',', '.'))

                    entradaDeDados.question('Em quantas vezes deseja pagar? \n(Digite 1 para MESES ou 2 para ANOS): ', function (selecao) {
                        let escolha = selecao

                        entradaDeDados.question('Digite o tempo:', function (tempo) {
                            let tempoPagamento = tempo

                            //Sistema de erros ao digitar
                            if (nomeCliente == '' || produto == '' || taxaJuros == '' || tempoPagamento == '') {
                                console.log('ERRO: PREENCHER TODOS OS CAMPOS SOLICITADOS ACIMA')
                                iniciarSistema()

                            } else if (isNaN(valorProduto) || isNaN(taxaJuros) || isNaN(tempoPagamento)) {
                                console.log('ERRO: Os campos VALOR e TAXA aceitam apenas números.\nPor favor, tente novamente.')
                                iniciarSistema()

                            } else {

                                //conversão de ano para meses
                                if (escolha == '2') {
                                    tempoPagamento = (tempoPagamento * 12)

                                }

                                //Calculo de taxa
                                let i = taxaJuros / 100

                                let montante = valorProduto * ((1 + i) ** tempoPagamento)

                                let valorParcela = montante / tempoPagamento

                                let aux = montante - valorProduto

                                //Mensagem final com as informações do cliente e os valores solicitados
                                console.log('------------------------------- Aura Store -------------------------------')
                                console.log(`Muito obrigado por realizar a sua compra conosco Sr(a) ${nomeCliente}.`)
                                console.log(`A compra do produto ${nomeProduto}, tem um valor de: ${valorProduto}.`)
                                console.log(`A sua compra será parcelada em ${tempoPagamento} vezes e o Sr(a) pagará: ${montante.toFixed(2)}.`)
                                console.log(`O acréscimo realizado ao valor de: ${valorProduto} será de ${aux.toFixed(2)}.`)
                                console.log('                                                                            ')
                                console.log('Muito obrigado por escolher a Aura Store.')
                                console.log('--------------------------------------------------------------------------')

                                //Sistema para escolha de novo calculo ou encerramento do programa
                                entradaDeDados.question('Deseja iniciar um novo calculo? Digite 1 para "SIM" ou 2 "NÃO": ', function(novo){
                                    let novoCalculo = novo

                                    if (novoCalculo == '1'){
                                        iniciarSistema()
    
                                    }else{
                                        console.log('Encerrando o sistema... Até logo!');
                                        entradaDeDados.close();
                                    }

                                })

                               

                            }
                        })


                    })

                })

            })
        })


    })
}
iniciarSistema()