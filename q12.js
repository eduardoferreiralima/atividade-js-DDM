/**
 * Escreva um programa que exiba a tabuada de multiplicacao de um numero (de 1 a 10).

// Exemplo para numero 7:
7 x 1 = 7
7 x 2 = 14
...
7 x 10 = 70
 */

const prompt = require('prompt-sync')();
const num = prompt('Digite um Numero: ');
let numero = Number(num);
if (isNaN(numero) || numero < 1 || numero > 10){
    console.log("Erro - Digite um numero valido de 1 a 10!");
}else{
    for (let i = 1; i <= numero; i++){
        console.log(`${numero} x ${i} = ${numero*i}`);
    }
}

