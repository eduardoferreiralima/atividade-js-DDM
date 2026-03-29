/**
 * 
 * Calculadora de IMC
Crie um programa que calcule o Indice de Massa Corporal (IMC) a partir do peso (kg) e altura (m). Exiba o valor do IMC com 2 casas decimais.

Formula: IMC = peso / (altura * altura)

// Exemplo:
Peso: 75, Altura: 1.80
Saida: "Seu IMC e: 23.15"
 */

const peso = 75;
const altura = 1.80;
function calcIMC(p,a){
    return p/(a*a);
}
console.log("Seu IMC é: "+calcIMC(peso,altura).toFixed(2));