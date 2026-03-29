/**
 * 
Classificacao do IMC
Aproveite o calculo do IMC (questao 2) e agora classifique o resultado: 
Abaixo do peso (< 18.5), Normal (18.5–24.9), Sobrepeso (25–29.9) ou Obesidade (>= 30).

// Exemplo:
IMC: 23.15
Saida: "IMC 23.15 - Classificacao: Normal"
 */


const peso = 105;
const altura = 1.80;
function calcIMC(p,a){
    let result = p/(a*a);
    result = result.toFixed(2);
    if (result < 18.5) return `IMC ${result} - Abaixo do Peso`;
    if (result > 18.5 && result <= 24.9) return `IMC ${result} - Normal`;
    if (result >= 24.9 && result <= 29.9) return `IMC ${result} - Sobrepeso`;
    if (result >= 30 ) return `IMC ${result} - Obesidade`;
}
console.log("Seu IMC é: "+calcIMC(peso,altura));
