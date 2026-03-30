/**
 * Gere um numero aleatorio entre 1 e 50 (Math.random()). 
 * Simule tentativas de adivinhacao usando um array de palpites. 
 * Para cada palpite, diga se o numero secreto e "maior", "menor" ou se "acertou". 
 * Conte quantas tentativas foram necessarias.

// Exemplo:
Numero secreto: 23
Palpites: [10, 30, 20, 25, 23]
"10 - O numero e maior!"
"30 - O numero e menor!"
"20 - O numero e maior!"
"25 - O numero e menor!"
"23 - Acertou em 5 tentativas!"
 */
console.log("Adivinhe o numero de 1 a 50")
const prompt = require('prompt-sync')();
let n;
let palpites = [];
let numero = Math.floor(Math.random() * 50) + 1;
let tentativas = 0;
while(numero!==n){
    n = Number(prompt('Digite um número: '));
    palpites.push(n);
    tentativas++;
    if (isNaN(n)) {
        console.log("Por favor, digite apenas números!");
    }
    else if (n === numero){
        console.log(`Numero Secreto: ${numero}`)
        console.log(`Palpites: [${palpites}]`)
        console.log(`${n} - Acertou em ${tentativas} tentativas!`);
        
    }
    else if(n != numero && n > numero){
        console.log(`${n} - O numero é menor!`);
    }
    else if(n != numero && n < numero){
        console.log(`${n} - O numero é maior!`);
    }
}
