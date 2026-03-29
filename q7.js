/**
 * Par ou Impar
Escreva um programa que verifique se um numero e par ou impar. Use o operador modulo (%). Alem disso, informe se o numero e positivo, negativo ou zero.

// Exemplo:
Entrada: -7
Saida: "-7 e impar e negativo"
 */
const prompt = require('prompt-sync')();
const numero = prompt('Digite um número positivo ou negativo: ');
function verifyNumber(n){
    if (n % 2 === 0) {
        if (n > 0){
            return `${n} é Par e positivo`;
        } else return `${n} é Par e Negativo`;
    } else{
        if (n > 0){
            return `${n} é impar e positivo`;
        }else return `${n} é impar e negativo`;
    } 
}
console.log(verifyNumber(Number(numero)));