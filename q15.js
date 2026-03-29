/**
 * 
Fibonacci
Exiba os primeiros N termos da sequencia de Fibonacci (0, 1, 1, 2, 3, 5, 8, 13, ...).

// Exemplo para N = 8:
0, 1, 1, 2, 3, 5, 8, 13
 */

const prompt = require('prompt-sync')();
const num = prompt('Digite um Numero: ');
var n = Number(num);

if (isNaN(n) || n < 1){
    console.log("Erro - Digite um numero valido!");
}else{
    let numA = 1;
    let numB = 0;
    let num;
    for(let i = 0; i < n; i++){
        console.log(`${numA}`);
	    num = numA + numB;
	    numB = numA;
	    numA = num;
    }
}