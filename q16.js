/**
 * Escreva um programa que verifique se um numero e primo. Depois, liste todos os numeros primos de 2 ate N.

// Exemplo para N = 20:
Primos ate 20: 2, 3, 5, 7, 11, 13, 17, 19
 */
const prompt = require('prompt-sync')();
const num = prompt('Digite um Numero: ');
var n = Number(num);
function ePrimo(numero){
    if (numero < 2) return false;

    for (let i = 2; i <= Math.sqrt(numero); i++){
        if (numero%i===0) return false;
    }
    return true;
}
console.log(`Primos até ${n}:`)
for (let i = 1; i<n;i++){
    if(ePrimo(i)){
        console.log(i)
    }
}