/**
 * Troca de Valores
Crie duas variaveis a = 10 e b = 20. 
Troque os valores entre elas sem usar uma terceira variavel (dica: desestruturacao). 
Exiba os valores antes e depois da troca.

// Antes: a = 10, b = 20
// Depois: a = 20, b = 10
 */

let a = 10;
let b = 20;
console.log(`Antes: a = ${a}, b = ${b}`);
[a, b] = [b, a];
console.log(`Depois: a = ${a}, b = ${b}`);