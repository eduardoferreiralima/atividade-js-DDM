/**
 * Arrow Function - Verificador de Maioridade
Crie uma arrow function chamada verificarIdade que receba nome e idade, e retorne uma string 
dizendo se a pessoa e maior de idade (>= 18) ou menor. Teste com pelo menos 3 pessoas.

// Exemplo:
verificarIdade("Ana", 22) → "Ana tem 22 anos e e maior de idade"
verificarIdade("Pedro", 15) → "Pedro tem 15 anos e e menor de idade"
 */
const prompt = require('prompt-sync')();
const nome = prompt('Digite o Nome: ');
const idade = prompt('Digite a Idade: ');
const verificarIdade = (nome, idade) => {
    if (idade < 18) {
        console.log(`${nome} tem ${idade} e é menor de idade!`)
    }
    else if (idade >= 18) {
        console.log(`${nome} tem ${idade} e é maior de idade!`)
    }else{
        console.log("dados invalidos")
    }
}
verificarIdade(nome, Number(idade));