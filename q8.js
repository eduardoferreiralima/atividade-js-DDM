/**
 * Dia da Semana
Receba um numero de 1 a 7 e exiba o dia da semana correspondente (1 = Domingo, 2 = Segunda, ..., 7 = Sabado). 
Use switch/case. Se o numero for invalido, exiba "Dia invalido".

// Exemplo:
Entrada: 4
Saida: "Quarta-feira"
 */

const prompt = require('prompt-sync')();
const numero = prompt('Digite um número: ');

switch (Number(numero)){
    case 1:
        console.log("Domingo");
        break;
    case 2:
        console.log("Segunda-Feira");
        break;
    case 3:
        console.log("Terça-Feira");
        break;
    case 4:
        console.log("Quarta-Feira");
        break;
    case 5:
        console.log("Quinta-Feira");
        break;
    case 6:
        console.log("Sexta-Feira");
        break;
    case 7:
        console.log("Sábado");
        break;

    default:
        console.log("Dia Inválido!");
        break;
}
