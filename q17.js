/**
 * Piramide de Asteriscos
Dado um numero N, desenhe uma piramide centralizada de asteriscos com N linhas.

// Exemplo para N = 4:
   *
  ***
 *****
*******
 */

const prompt = require('prompt-sync')();
const num = prompt('Digite um Numero: ');
var n = Number(num);
for (let i = 1; i <= n; i++){
    let espacos = " ".repeat(n - i);
    let asteriscos = "*".repeat(2 * i - 1);
    console.log(espacos + asteriscos);
}