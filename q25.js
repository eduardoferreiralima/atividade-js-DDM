/**
 * 
Filtro de Pares e Impares
Dado um array de numeros, separe em dois novos arrays: um com os pares e outro com os impares. 
Voce pode usar .filter() ou percorrer manualmente.

// Exemplo:
Original: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
Pares: [2, 4, 6, 8, 10]
Impares: [1, 3, 5, 7, 9]
 */

let original = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let pares = [];
let impares = [];

for (let i = 0; i < original.length; i++){
    if (original[i]%2===0){
        pares.push(original[i]);
    }else impares.push(original[i]);
}
console.log(`Pares: [${pares}]`)
console.log(`Impares: [${impares}]`)