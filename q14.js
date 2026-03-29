/**
 * Calcule o fatorial de um numero N usando um laco. Lembre: 0! = 1, 5! = 5 x 4 x 3 x 2 x 1 = 120.

// Exemplo:
Entrada: 5
Saida: "5! = 120"
 */

const prompt = require('prompt-sync')();
const num = prompt('Digite um Numero: ');
var n = Number(num);

if (isNaN(n) || n < 1){
    console.log("Erro - Digite um numero valido!");
}else{
    let result = 1;
    while(n>0){
        result = result * n;
        n--;
    }
    console.log(`${num}! = ${result}`);
}