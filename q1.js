/**
 * Conversor de Temperatura
Escreva um programa que receba uma temperatura em Celsius 
(armazenada em uma variavel) e converta para Fahrenheit. Exiba o resultado formatado.

Formula: F = C * 9/5 + 32

// Exemplo:
Entrada: 100
Saida: "100°C equivale a 212°F"
 */

const entrada = 100;
function convertTemp(n){
    return (n * 1.8)+32;
}
console.log(entrada+"°C equivale a "+convertTemp(entrada)+"°F");