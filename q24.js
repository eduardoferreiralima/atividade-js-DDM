/**
 * Estatisticas do Array
Dado um array de numeros, calcule e exiba: soma, media, maior valor e menor valor. 
Nao use Math.max()/Math.min() — percorra o array manualmente.

// Exemplo:
Numeros: [8, 3, 15, 7, 22, 1, 10]
Soma: 66 | Media: 9.43
Maior: 22 | Menor: 1
 */

let array = [8, 3, 15, 7, 22, 1, 10, 1200, 123];

let soma = 0;
let media;
let menor = array[0];
let maior = array[0];

for (let i = 0; i < array.length; i++){

    soma += array[i];

    if (array[i] < menor){
        menor = array[i];
    }
    if (array[i] > maior){
        maior = array[i];
    }

}

media = soma / array.length;

console.log(`Numeros: [${array}]`)
console.log(`Soma: ${soma} | Média: ${media.toFixed(2)}`)
console.log(`Maior: ${maior} | Menor: ${menor}`)
