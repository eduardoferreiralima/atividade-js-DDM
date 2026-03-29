/**
Triangulo Valido
Receba tres valores (lados de um triangulo). 
Verifique se formam um triangulo valido (cada lado deve ser menor que a soma dos outros dois). 
Se valido, classifique como equilatero, isosceles ou escaleno.

// Exemplo:
Lados: 3, 4, 5
Saida: "Triangulo valido - Escaleno"

Lados: 1, 2, 10
Saida: "Nao forma um triangulo"
 */

const prompt = require('prompt-sync')();
const lado1 = prompt('Digite o valor do Lado 1: ');
const lado2 = prompt('Digite o valor do Lado 2: ');
const lado3 = prompt('Digite o valor do Lado 3: ');

function verificarTriangulo(l1,l2,l3){

    if (isNaN(l1) || isNaN(l2) || isNaN(l3)) return `Valores informados inválidos!`;
    
    let s1 = l1 + l2;
    let s2 = l2 + l3;
    let s3 = l3 + l1;
    if (s1 < l3 ||  s2 < l1 || s3 < l2 ){
        return `Não forma um Triangulo válido!`;
    }
    else if(l1 === l2 && l2 === l3){
        return `Triangulo Valido - Equilatero`;
    }
    else if (l1 === l2 || l2 === l3 || l1 === l3){
        return `Triangulo Valido - Isósceles`;
    }
    else if(l1 != l2 && l2 != l3 && l3 != l1){
        return `Triangulo Valido - Escaleno`;
    }
}
console.log(verificarTriangulo(Number(lado1),Number(lado2),Number(lado3)));