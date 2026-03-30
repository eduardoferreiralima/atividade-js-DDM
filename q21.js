/**
 * Funcao Recursiva - Potencia
Crie uma funcao potencia(base, expoente) que calcule a potencia sem usar Math.pow() 
ou o operador **. Use recursao ou um laco.

// Exemplo:
potencia(2, 10) → 1024
potencia(3, 4) → 81
potencia(5, 0) → 1
 */

const prompt = require('prompt-sync')();
const base = prompt('Digite o Valor Base: ');
const expoente = prompt('Digite o valor do Expoente: ');
let result = 1;
let contador = 0;
function calcularPotencia(base,expoente){
    
    if (contador === expoente){
        console.log(result)
    }else{
        contador++;
        result = result * base;
        calcularPotencia(base, expoente);
    }
}
calcularPotencia(Number(base), Number(expoente));